import { ref, watch, onMounted, onUnmounted } from 'vue';

/**
 * Custom hook for managing localStorage with error handling
 */
export function useLocalStorage<T>(
    key: string,
    initialValue: T,
    serializer: (value: T) => string = JSON.stringify,
    deserializer: (value: string) => T = JSON.parse
) {
    const getItemSafely = (): T => {
        try {
            const item = localStorage.getItem(key);
            if (item === null) {
                return initialValue;
            }
            return deserializer(item);
        } catch (error) {
            console.error(`Error reading from localStorage with key "${key}":`, error);
            return initialValue;
        }
    };

    const setItemSafely = (value: T) => {
        try {
            const serializedValue = serializer(value);
            localStorage.setItem(key, serializedValue);
        } catch (error) {
            console.error(`Error writing to localStorage with key "${key}":`, error);
        }
    };

    const removeItemSafely = () => {
        try {
            localStorage.removeItem(key);
        } catch (error) {
            console.error(`Error removing item from localStorage with key "${key}":`, error);
        }
    };

    const storedValue = ref<T>(getItemSafely());

    const setValue = (value: T | ((val: T) => T)) => {
        const newValue = value instanceof Function ? value(storedValue.value) : value;
        storedValue.value = newValue;
        setItemSafely(newValue);
    };

    const clearValue = () => {
        removeItemSafely();
        storedValue.value = initialValue;
    };

    const storageHandler = (event: StorageEvent) => {
        if (event.key === key && event.newValue) {
            try {
                const parsedValue = deserializer(event.newValue);
                storedValue.value = parsedValue;
            } catch (error) {
                console.error(`Error parsing localStorage value for key "${key}":`, error);
                storedValue.value = initialValue;
            }
        }
    };

    onMounted(() => {
        window.addEventListener('storage', storageHandler);
    });

    onUnmounted(() => {
        window.removeEventListener('storage', storageHandler);
    });

    watch(
        storedValue,
        (newValue) => {
            if (typeof newValue !== 'undefined') {
                setItemSafely(newValue);
            }
        },
        { deep: true }
    );

    return {
        value: storedValue,
        setValue,
        clearValue,
    };
}