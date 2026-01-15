import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import type { User, SortOption } from 'src/shared/types';

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
  ]);

  const filterAdultsOnly = ref(false);
  const sortOption = ref<SortOption>({ field: 'firstName', direction: 'asc' });

  // Computed: filtered users
  const filteredUsers = computed(() => {
    let filtered = [...users.value];
    
    // Apply age filter
    if (filterAdultsOnly.value) {
      filtered = filtered.filter(user => user.age >= 18);
    }
    
    return filtered;
  });

  // Computed: sorted and filtered users
  const sortedAndFilteredUsers = computed(() => {
    const filtered = [...filteredUsers.value];
    
    return filtered.sort((a, b) => {
      const aValue = a[sortOption.value.field];
      const bValue = b[sortOption.value.field];
      
      if (sortOption.value.direction === 'asc') {
        return aValue > bValue ? 1 : aValue < bValue ? -1 : 0;
      } else {
        return aValue < bValue ? 1 : aValue > bValue ? -1 : 0;
      }
    });
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