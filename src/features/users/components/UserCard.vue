<template>
    <q-card class="user-card q-mb-md" bordered>
        <q-card-section class="row items-center">
            <div class="col-3 q-pr-md">
                <!-- User Photo -->
                <div class="user-photo-container q-mb-sm">
                    <q-avatar v-if="user.photo" size="60px" class="user-avatar">
                        <img :src="user.photo" :alt="`${user.firstName} ${user.lastName}`" />
                    </q-avatar>

                    <q-avatar v-else size="60px" color="primary" text-color="white" class="user-avatar">
                        {{ userInitials }}
                    </q-avatar>

                    <q-btn round color="secondary" icon="photo_camera" size="sm" class="upload-btn"
                        @click="triggerFileInput">
                        <q-tooltip class="bg-primary">
                            {{ $t('components.users.uploadPhoto') }}
                        </q-tooltip>
                    </q-btn>
                </div>

                <input ref="fileInput" type="file" accept="image/*" class="hidden" @change="handleFileUpload" />
            </div>

            <div class="col-9">
                <!-- User Info -->
                <div class="text-h6 q-mb-xs">
                    {{ user.firstName }} {{ user.lastName }}
                </div>

                <div class="">
                    <div class="col-12 col-sm-6">
                        <div class="row items-center">
                            <q-icon name="email" size="sm" class="q-mr-sm" />
                            <span class="text-body1">{{ user.email }}</span>
                        </div>
                        <div class="row items-center">
                            <q-icon name="cake" size="sm" class="q-mr-sm" />
                            <span class="text-body1">
                                {{ $t('components.users.age', { age: user.age }) }}
                                <q-badge v-if="user.age < 18" color="orange-9" class="q-ml-sm">
                                    {{ $t('components.users.minor') }}
                                </q-badge>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </q-card-section>
    </q-card>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import type { User } from 'src/shared/types';

interface Props {
    user: User;
}

const props = defineProps<Props>();
const emit = defineEmits<{
    photoUploaded: [userId: number, photoData: string];
}>();

const fileInput = ref<HTMLInputElement>();

const userInitials = computed(() => {
    return `${props.user.firstName[0]}${props.user.lastName[0]}`.toUpperCase();
});

const triggerFileInput = () => {
    fileInput.value?.click();
};

const handleFileUpload = (event: Event) => {
    const input = event.target as HTMLInputElement;
    const file = input.files?.[0];

    if (file) {
        const reader = new FileReader();
        reader.onload = (e) => {
            const result = e.target?.result as string;
            if (result) {
                emit('photoUploaded', props.user.id, result);
            }
        };
        reader.readAsDataURL(file);

        // Reset input
        input.value = '';
    }
};
</script>

<style scoped lang="scss">
.user-card {
    transition: transform 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 1px 4px var(--q-pageUtilityContrast);
    }

    .user-photo-container {
        position: relative;
        display: inline-block;
    }

    .upload-btn {
        position: absolute;
        bottom: 0;
        right: 0;
        transform: translate(25%, 25%);
    }
}

.hidden {
    display: none;
}
</style>