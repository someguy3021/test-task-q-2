import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { User, SortOption } from 'src/shared/types';
import { useUserFilters } from 'src/shared/composables/user-filters';
import { useUserSorting } from 'src/shared/composables/user-sorting';

export const useUsersStore = defineStore('users', () => {
  // Initial mock data
  const users = ref<User[]>([
    { id: 1, firstName: 'John', lastName: 'Doe', age: 25, email: 'john@example.com', photo: null },
    { id: 2, firstName: 'Jane', lastName: 'Smith', age: 30, email: 'jane@example.com', photo: null },
    { id: 3, firstName: 'Bob', lastName: 'Johnson', age: 17, email: 'bob@example.com', photo: null },
    { id: 4, firstName: 'Alice', lastName: 'Brown', age: 22, email: 'alice@example.com', photo: null },
    { id: 5, firstName: 'Charlie', lastName: 'Wilson', age: 19, email: 'charlie@example.com', photo: null },
    { id: 6, firstName: 'Diana', lastName: 'Miller', age: 16, email: 'diana@example.com', photo: null },
    { id: 7, firstName: 'Ethan', lastName: 'Davis', age: 28, email: 'ethan@example.com', photo: null },
    { id: 8, firstName: 'Fiona', lastName: 'Garcia', age: 35, email: 'fiona@example.com', photo: null },
    { id: 9, firstName: 'George', lastName: 'Martinez', age: 42, email: 'george.martinez@example.com', photo: null },
    { id: 10, firstName: 'Hannah', lastName: 'Taylor', age: 23, email: 'h.taylor@example.com', photo: null },
    { id: 11, firstName: 'Ian', lastName: 'Anderson', age: 31, email: 'ian.anderson@example.com', photo: null },
    { id: 12, firstName: 'Julia', lastName: 'Thomas', age: 27, email: 'julia.thomas@example.com', photo: null },
    { id: 13, firstName: 'Kevin', lastName: 'Lee', age: 19, email: 'kevin.lee@example.com', photo: null },
    { id: 14, firstName: 'Laura', lastName: 'Walker', age: 38, email: 'l.walker@example.com', photo: null },
    { id: 15, firstName: 'Michael', lastName: 'Harris', age: 45, email: 'm.harris@example.com', photo: null },
    { id: 16, firstName: 'Natalie', lastName: 'Clark', age: 29, email: 'natalie.c@example.com', photo: null },
    { id: 17, firstName: 'Oliver', lastName: 'Lewis', age: 33, email: 'oliver.lewis@example.com', photo: null },
    { id: 18, firstName: 'Paula', lastName: 'Robinson', age: 26, email: 'p.robinson@example.com', photo: null },
    { id: 19, firstName: 'Quentin', lastName: 'Young', age: 21, email: 'quentin.y@example.com', photo: null },
    { id: 20, firstName: 'Rachel', lastName: 'King', age: 40, email: 'r.king@example.com', photo: null },
    { id: 21, firstName: 'Steven', lastName: 'Scott', age: 36, email: 'steven.scott@example.com', photo: null },
    { id: 22, firstName: 'Tina', lastName: 'Adams', age: 24, email: 't.adams@example.com', photo: null },
    { id: 23, firstName: 'Victor', lastName: 'Nelson', age: 18, email: 'victor.n@example.com', photo: null },
  ]);

  const filterAdultsOnly = ref(false);
  const sortOption = ref<SortOption>({ field: 'firstName', direction: 'asc' });

  // Using composable for filtering
  const { filteredUsers } = useUserFilters(users, filterAdultsOnly);

  // Using composable for sorting
  const { sortedUsers } = useUserSorting(filteredUsers.value, sortOption.value.field, sortOption.value.direction);

  // Computed: sorted and filtered users
  const sortedAndFilteredUsers = computed(() => {
    return sortedUsers.value;
  });

  // Actions
  const updateUserPhoto = (userId: number, photoData: string) => {
    const user = users.value.find(u => u.id === userId);
    if (user) {
      user.photo = photoData;
    }
  };

  const toggleFilterAdults = () => {
    filterAdultsOnly.value = !filterAdultsOnly.value;
  };

  const setSortOption = (field: keyof Omit<User, 'id' | 'photo'>, direction: 'asc' | 'desc' = 'asc') => {
    sortOption.value = { field, direction };
  };

  const toggleSortDirection = () => {
    sortOption.value.direction = sortOption.value.direction === 'asc' ? 'desc' : 'asc';
  };

  const addUser = (user: Omit<User, 'id'>) => {
    const newId = Math.max(...users.value.map(u => u.id)) + 1;
    users.value.push({ ...user, id: newId });
  };

  return {
    // State
    filterAdultsOnly,
    sortOption,

    // Computed
    users: sortedAndFilteredUsers,
    allUsers: users,

    // Actions
    updateUserPhoto,
    toggleFilterAdults,
    setSortOption,
    toggleSortDirection,
    addUser,
  };
});