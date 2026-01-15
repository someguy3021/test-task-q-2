<template>
    <q-page class="q-pa-md">
        <!-- Page Header -->
        <div class="row items-center justify-between q-mb-lg">
            <div class="col-12 col-md-6">
                <h1 class="text-h4 q-mb-none">{{ $t('pages.users.title') }}</h1>
                <p class="text-subtitle1 text-grey-7 q-mt-sm">
                    {{ $t('pages.users.subtitle', {
                        count: usersStore.allUsers.length, filtered: usersStore.users.length
                    }) }}
                </p>
            </div>

            <!-- Add User Button -->
            <div class="col-12 col-md-6 text-right">
                <q-btn color="primary" icon="person_add" :label="$t('pages.users.addUser')"
                    @click="showAddUserDialog = true" />
            </div>
        </div>

        <!-- Filters and Sort Controls -->
        <q-card class="q-mb-lg">
            <q-card-section>
                <div class="row items-center q-col-gutter-lg">
                    <!-- Age Filter -->
                    <div class="col-12 col-sm-auto">
                        <q-toggle v-model="usersStore.filterAdultsOnly" :label="$t('pages.users.filterAdults')"
                            color="primary" @update:model-value="usersStore.toggleFilterAdults()" />
                    </div>

                    <!-- Sort Controls -->
                    <div class="col-12 col-sm">
                        <div class="row items-center q-col-gutter-sm">
                            <div class="col-auto">
                                <span class="text-body1">{{ $t('pages.users.sortBy') }}:</span>
                            </div>

                            <div class="col-auto">
                                <q-btn-toggle v-model="usersStore.sortOption.field" :options="sortFieldOptions"
                                    toggle-color="primary" @update:model-value="handleSortFieldChange" />
                            </div>

                            <div class="col-auto">
                                <q-btn round
                                    :icon="usersStore.sortOption.direction === 'asc' ? 'arrow_upward' : 'arrow_downward'"
                                    :color="usersStore.sortOption.direction === 'asc' ? 'primary' : 'secondary'"
                                    @click="usersStore.toggleSortDirection()">
                                    <q-tooltip>
                                        {{ $t('pages.users.toggleSortDirection') }}
                                    </q-tooltip>
                                </q-btn>
                            </div>
                        </div>
                    </div>
                </div>
            </q-card-section>
        </q-card>

        <!-- Users List -->
        <div v-if="usersStore.users.length > 0" class="users-list">
            <UserCard v-for="user in usersStore.users" :key="user.id" :user="user" @photo-uploaded="handlePhotoUpload"
                class="q-mb-md" />
        </div>

        <!-- Empty State -->
        <div v-else class="text-center q-py-xl">
            <q-icon name="people" size="100px" color="grey-4" class="q-mb-md" />
            <h3 class="text-h5 q-mb-sm">{{ $t('pages.users.noUsers') }}</h3>
            <p class="text-body1 text-grey-7 q-mb-lg">
                {{ $t('pages.users.noUsersDescription') }}
            </p>
            <q-btn color="primary" icon="person_add" :label="$t('pages.users.addFirstUser')"
                @click="showAddUserDialog = true" />
        </div>

        <!-- Add User Dialog -->
        <q-dialog v-model="showAddUserDialog" persistent>
            <q-card style="min-width: 400px">
                <q-card-section class="row items-center q-pb-none">
                    <div class="text-h6">{{ $t('pages.users.addUser') }}</div>
                    <q-space />
                    <q-btn icon="close" flat round dense v-close-popup />
                </q-card-section>

                <q-card-section>
                    <q-form @submit="handleAddUser" class="q-gutter-md">
                        <div class="row">
                            <div class="col-12 col-sm-6">
                                <q-input v-model="newUser.firstName" :label="$t('pages.users.firstName')" outlined dense
                                    :rules="[val => !!val || $t('common.validation.required')]" />
                            </div>

                            <div class="col-12 col-sm-6">
                                <q-input v-model="newUser.lastName" :label="$t('pages.users.lastName')" outlined dense
                                    :rules="[val => !!val || $t('common.validation.required')]" />
                            </div>
                        </div>

                        <q-input v-model.number="newUser.age" type="number" :label="$t('pages.users.age')" outlined
                            dense :rules="[val => val >= 0 || $t('common.validation.minAge')]" />

                        <q-input v-model="newUser.email" type="email" :label="$t('pages.users.email')" outlined dense
                            :rules="[
                                val => !!val || $t('common.validation.required'),
                                val => /.+@.+\..+/.test(val) || $t('common.validation.invalidEmail')
                            ]" />

                        <div class="row justify-end q-gutter-sm">
                            <q-btn flat :label="$t('common.cancel')" v-close-popup />
                            <q-btn color="primary" type="submit" :label="$t('common.add')" />
                        </div>
                    </q-form>
                </q-card-section>
            </q-card>
        </q-dialog>
    </q-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';
import { useUsersStore } from 'src/features/users/stores/users-store';
import UserCard from 'src/features/users/components/UserCard.vue';
import type { User } from 'src/shared/types';

const { t } = useI18n();
const usersStore = useUsersStore();
const showAddUserDialog = ref(false);

const newUser = ref<Omit<User, 'id'>>({
    firstName: '',
    lastName: '',
    age: 20,
    email: '',
    photo: null,
});

const sortFieldOptions = computed(() => [
    { label: t('pages.users.sortByName'), value: 'firstName' },
    { label: t('pages.users.sortByAge'), value: 'age' },
    { label: t('pages.users.sortByEmail'), value: 'email' },
]);

const handlePhotoUpload = (userId: number, photoData: string) => {
    usersStore.updateUserPhoto(userId, photoData);
};

const handleSortFieldChange = (field: keyof Omit<User, 'id' | 'photo'>) => {
    usersStore.setSortOption(field);
};

const handleAddUser = () => {
    usersStore.addUser(newUser.value);
    showAddUserDialog.value = false;

    // Reset form
    newUser.value = {
        firstName: '',
        lastName: '',
        age: 20,
        email: '',
        photo: null,
    };
};
</script>

<style scoped lang="scss">
.users-list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
    gap: 16px;

    @media (max-width: $breakpoint-sm) {
        grid-template-columns: 1fr;
    }
}

@media (max-width: $breakpoint-sm) {
    .q-pa-md {
        padding: 16px;
    }
}
</style>