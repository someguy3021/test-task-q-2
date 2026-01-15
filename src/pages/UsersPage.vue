<template>
    <q-page class="q-pa-md">
        <!-- Page Header -->
        <div>
            <div class="row items-center justify-between q-mb-xs" v-if="$q.screen.gt.sm">
                <div class="col-12 col-md-6">
                    <h1 class="text-h4 q-mb-none">{{ $t('pages.UsersPage.title') }}</h1>
                    <p class="text-subtitle1 text-grey-7 q-mt-sm">
                        {{ $t('pages.UsersPage.subtitle', {
                            count: usersStore.allUsers.length,
                            filtered: filteredUsers.length
                        }) }}
                    </p>
                </div>

                <!-- Add User Button -->
                <div class="col-12 col-md-6 text-right">
                    <q-btn color="primary" icon="person_add" :label="$t('pages.UsersPage.addUser')"
                        @click="showAddUserDialog = true" />
                </div>
            </div>
            <div class="row items-center justify-between q-mb-xs" v-else>
                <div class="col-10">
                    <div class="text-subtitle1 q-mb-none">{{ $t('pages.UsersPage.title') }}</div>
                    <div class="text-grey-7">
                        {{ $t('pages.UsersPage.subtitle', {
                            count: usersStore.allUsers.length,
                            filtered: filteredUsers.length
                        }) }}
                    </div>
                </div>

                <!-- Add User Button -->
                <div class="col-auto">
                    <q-btn color="primary" icon="person_add" @click="showAddUserDialog = true" />
                </div>
            </div>
        </div>

        <div v-if="$q.screen.gt.sm">
            <q-table :rows="filteredUsers" :columns="columns" row-key="id" grid :rows-per-page-options="[8, 16, 24, 36]"
                :filter="searchFilter" :filter-method="filterMethod" :rows-per-page-label="$t('common.rows_per_page')"
                :pagination-label="(firstRowIndex: number, endRowIndex: number, totalRowsNumber: number) => {
                    return `${firstRowIndex}-${endRowIndex} ${$t('common.pagination_label_of')} ${totalRowsNumber}`;
                }" class="users-table">
                <template v-slot:top>
                    <!-- Filters and Sort Controls -->
                    <q-card class="q-mb-md full-width">
                        <q-card-section class="flex justify-between">
                            <div class="row items-center q-col-gutter-lg">
                                <!-- Age Filter -->
                                <div class="col-12 col-sm-auto">
                                    <q-toggle v-model="usersStore.filterAdultsOnly"
                                        :label="$t('pages.UsersPage.filterAdults')" color="primary" />
                                </div>

                                <!-- Sort Controls -->
                                <div class="col-12 col-sm">
                                    <div class="row items-center q-col-gutter-sm">
                                        <div class="col-auto">
                                            <span class="text-body1">{{ $t('pages.UsersPage.sortBy') }}:</span>
                                        </div>

                                        <div class="col-auto">
                                            <q-btn-toggle v-model="usersStore.sortOption.field"
                                                :options="sortFieldOptions" toggle-color="primary"
                                                @update:model-value="handleSortFieldChange" />
                                        </div>

                                        <div class="col-auto">
                                            <q-btn round
                                                :icon="usersStore.sortOption.direction === 'asc' ? 'arrow_upward' : 'arrow_downward'"
                                                :color="usersStore.sortOption.direction === 'asc' ? 'primary' : 'secondary'"
                                                @click="usersStore.toggleSortDirection()">
                                                <q-tooltip class="bg-primary">
                                                    {{ $t('pages.UsersPage.toggleSortDirection') }}
                                                </q-tooltip>
                                            </q-btn>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <q-input borderless dense debounce="300" v-model="searchFilter"
                                :placeholder="$t('common.search')" class="search-input" clearable>
                                <template v-slot:append>
                                    <q-icon name="search" />
                                </template>
                            </q-input>
                        </q-card-section>
                    </q-card>
                </template>

                <template v-slot:item="props">
                    <div class="q-pa-xs col-xs-12 col-sm-6 col-md-4 col-lg-3">
                        <UserCard :user="props.row" @photo-uploaded="handlePhotoUpload" />
                    </div>
                </template>

                <template v-slot:no-data>
                    <!-- Empty State -->
                    <div class="text-center q-py-xl full-width">
                        <q-icon name="people" size="100px" color="grey-4" class="q-mb-md" />
                        <h3 class="text-h5 q-mb-sm">{{ $t('pages.UsersPage.noUsers') }}</h3>
                        <p class="text-body1 text-grey-7 q-mb-lg">
                            {{ $t('pages.UsersPage.noUsersDescription') }}
                        </p>
                        <q-btn color="primary" icon="person_add" :label="$t('pages.UsersPage.addFirstUser')"
                            @click="showAddUserDialog = true" />
                    </div>
                </template>
            </q-table>
        </div>
        <div v-else class="mobile-view">
            <!-- Search Input for Mobile -->
            <q-card class="q-mb-md full-width">
                <q-card-section class="row">
                    <div class="col-6">
                        <q-btn icon="filter_list" color="primary" :label="$t('pages.UsersPage.filtersAndSort')"
                            @click="showFiltersDialog = true"></q-btn>
                    </div>
                    <div class="col-6">
                        <q-input borderless dense debounce="300" v-model="searchFilter"
                            :placeholder="$t('common.search')" class="search-input" clearable>
                            <template v-slot:append>
                                <q-icon name="search" />
                            </template>
                        </q-input>
                    </div>
                </q-card-section>
            </q-card>

            <q-virtual-scroll v-if="filteredUsers.length > 0" :items="filteredUsers" :virtual-scroll-item-size="200"
                class="virtual-scroll-mobile">
                <template v-slot="{ item: user, index }">
                    <UserCard :key="user.id" :user="user" @photo-uploaded="handlePhotoUpload" class="q-mb-sm" />
                </template>
            </q-virtual-scroll>

            <div v-else class="text-center q-py-md">
                <div class="text-center q-py-md">
                    <q-icon name="people" size="100px" color="grey-4" class="q-mb-md" />
                    <h3 class="text-h5 q-mb-sm">{{ $t('pages.UsersPage.noUsers') }}</h3>
                    <p class="text-body1 text-grey-7 q-mb-lg">
                        {{ $t('pages.UsersPage.noUsersDescription') }}
                    </p>
                    <q-btn color="primary" icon="person_add" :label="$t('pages.UsersPage.addFirstUser')"
                        @click="$emit('add-user')" />
                </div>
            </div>
        </div>

        <!-- Add User Dialog -->
        <q-dialog v-model="showAddUserDialog">
            <UserForm :model-value="newUser" :title="$t('pages.UsersPage.addUser')" :submit-label="$t('common.add')"
                @submit="handleAddUser" @cancel="showAddUserDialog = false" @close="showAddUserDialog = false" />
        </q-dialog>

        <q-dialog v-model="showFiltersDialog">
            <q-card style="width: 300px">
                <q-card-section>
                    <div class="text-h6">{{ $t('pages.UsersPage.filtersAndSort') }}</div>
                </q-card-section>

                <q-card-section class="q-pt-none">
                    <!-- Age Filter -->
                    <div class="q-mb-md">
                        <q-toggle v-model="usersStore.filterAdultsOnly" :label="$t('pages.UsersPage.filterAdults')"
                            color="primary" dense />
                    </div>

                    <!-- Sort Controls -->
                    <div class="q-mb-sm">
                        <div class="text-body1 q-mb-xs">{{ $t('pages.UsersPage.sortBy') }}:</div>
                        <div class="row items-center q-col-gutter-sm">
                            <div class="col-12">
                                <q-btn-toggle v-model="usersStore.sortOption.field" :options="sortFieldOptions"
                                    toggle-color="primary" @update:model-value="handleSortFieldChange" spread dense />
                            </div>

                            <div class="col-12 text-center q-mt-sm">
                                <q-btn round
                                    :icon="usersStore.sortOption.direction === 'asc' ? 'arrow_upward' : 'arrow_downward'"
                                    :color="usersStore.sortOption.direction === 'asc' ? 'primary' : 'secondary'"
                                    @click="usersStore.toggleSortDirection()">
                                    <q-tooltip>
                                        {{ $t('pages.UsersPage.toggleSortDirection') }}
                                    </q-tooltip>
                                </q-btn>
                                <div class="text-caption text-grey-7 q-mt-xs">
                                    {{ usersStore.sortOption.direction === 'asc' ? 'По возрастанию' : 'По убыванию' }}
                                </div>
                            </div>
                        </div>
                    </div>
                </q-card-section>

                <q-card-actions align="right">
                    <q-btn flat :label="$t('common.close')" color="primary" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>
    </q-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useUsersStore } from 'src/features/users/stores/users-store';
import UserCard from 'src/features/users/components/UserCard.vue';
import UserForm from 'src/features/users/components/UserForm.vue';
import type { User } from 'src/shared/types';
import type { QTableProps } from 'quasar';

const { t } = useI18n();
const usersStore = useUsersStore();
const showAddUserDialog = ref(false);
const showFiltersDialog = ref(false);
const searchFilter = ref('');

const newUser = {
    firstName: '',
    lastName: '',
    age: 20,
    email: '',
    photo: null,
};

const columns: QTableProps['columns'] = [
    { name: 'firstName', label: t('components.UserForm.firstName'), field: 'firstName', sortable: true },
    { name: 'lastName', label: t('components.UserForm.lastName'), field: 'lastName', sortable: true },
    { name: 'age', label: t('components.UserForm.age'), field: 'age', sortable: true },
    { name: 'email', label: t('components.UserForm.email'), field: 'email', sortable: true },
];

const sortFieldOptions = computed(() => [
    { label: t('pages.UsersPage.sortByName'), value: 'firstName' },
    { label: t('pages.UsersPage.sortByAge'), value: 'age' },
    { label: t('pages.UsersPage.sortByEmail'), value: 'email' },
]);

const filteredUsers = computed(() => {
    return usersStore.users.filter(user => {
        if (!searchFilter.value) return true;

        const searchTerm = searchFilter.value.toLowerCase();
        return (
            user.firstName.toLowerCase().includes(searchTerm) ||
            user.lastName.toLowerCase().includes(searchTerm) ||
            user.email.toLowerCase().includes(searchTerm) ||
            user.age.toString().includes(searchTerm)
        );
    });
});

const filterMethod: QTableProps['filterMethod'] = (rows, terms) => {
    const lowerTerms = terms.toLowerCase();
    return rows.filter(row =>
        row.firstName.toLowerCase().includes(lowerTerms) ||
        row.lastName.toLowerCase().includes(lowerTerms) ||
        row.email.toLowerCase().includes(lowerTerms) ||
        row.age.toString().includes(lowerTerms)
    );
};

const handlePhotoUpload = (userId: number, photoData: string) => {
    usersStore.updateUserPhoto(userId, photoData);
};

const handleSortFieldChange = (field: keyof Omit<User, 'id' | 'photo'>) => {
    usersStore.setSortOption(field);
};

const handleAddUser = (userData: Omit<User, 'id'>) => {
    usersStore.addUser(userData);
    showAddUserDialog.value = false;
};
</script>

<style scoped lang="scss">
.users-table {
    :deep(.q-table__top) {
        padding: 0;
        border-bottom: none;
    }
}

// Для quasar virtual scroll нужно задавать высоту строго, так что задаю по устройствам
.virtual-scroll-mobile {
    overflow-x: hidden;

    @media (min-height: 500px) {
        max-height: 53vh;
    }

    @media (min-height: 700px) {
        max-height: 55vh;
    }

    @media (min-height: 800px) {
        max-height: 60vh;
    }

    @media (min-height: 850px) {
        max-height: 63vh;
    }

    @media (min-height: 900px) {
        max-height: 65vh;
    }
}
</style>