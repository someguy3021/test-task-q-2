import { computed, type Ref } from 'vue';
import type { User } from '../types';

export function useUserFilters(users: Ref<User[]>, filterAdultsOnly: Ref<boolean>) {
    const filteredUsers = computed(() => {
        let result = [...users.value];

        if (filterAdultsOnly.value) {
            result = result.filter(user => user.age >= 18);
        }

        return result;
    });

    return {
        filteredUsers
    };
}