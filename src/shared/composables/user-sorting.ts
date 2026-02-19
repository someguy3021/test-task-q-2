import { computed } from 'vue';
import type { User } from 'src/shared/types';
import { compareValues } from 'src/shared/utils/sorting-utils';

export function useUserSorting(users: User[], sortField: keyof Omit<User, 'id' | 'photo'>, sortDirection: 'asc' | 'desc') {
    const sortedUsers = computed(() => {
        return [...users].sort((a, b) => compareValues(a, b, sortField, sortDirection));
    });

    return {
        sortedUsers
    };
}