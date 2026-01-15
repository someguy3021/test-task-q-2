<template>
    <q-card class="user-form-card">
        <!-- Заголовок -->
        <q-card-section class="bg-primary text-white q-pb-sm">
            <div class="row items-center no-wrap">
                <div class="col">
                    <div class="text-h6">{{ title }}</div>
                    <div v-if="subtitle" class="text-caption text-white text-opacity-80">
                        {{ subtitle }}
                    </div>
                </div>
                <q-btn v-if="showClose" icon="close" flat round :dense="$q.screen.lt.md" class="text-white"
                    @click="$emit('close')" />
            </div>
        </q-card-section>

        <!-- Форма -->
        <q-form @submit="handleSubmit" class="q-gutter-y-md q-pa-lg">
            <!-- Имя и Фамилия в одной строке -->
            <div class="row">
                <div class="col-12 col-sm-6" :class="$q.screen.gt.md ? 'q-pr-md' : ''">
                    <q-input v-model="formData.firstName" :label="$t('components.UserForm.firstName')" outlined
                        :dense="$q.screen.lt.md" :rules="[val => !!val?.trim() || $t('common.validation.required')]"
                        color="primary" class="input-field">
                        <template v-slot:prepend>
                            <q-icon name="person" color="primary" />
                        </template>
                    </q-input>
                </div>

                <div class="col-12 col-sm-6">
                    <q-input v-model="formData.lastName" :label="$t('components.UserForm.lastName')" outlined
                        :dense="$q.screen.lt.md" :rules="[val => !!val?.trim() || $t('common.validation.required')]"
                        color="primary" class="input-field">
                        <template v-slot:prepend>
                            <q-icon name="badge" color="primary" />
                        </template>
                    </q-input>
                </div>
            </div>

            <!-- Возраст с иконкой и валидацией -->
            <q-input v-model.number="formData.age" type="number" :label="$t('components.UserForm.age')" outlined
                :dense="$q.screen.lt.md" :rules="[
                    val => val !== null && val !== undefined || $t('common.validation.required'),
                    val => val >= 0 || $t('common.validation.minAge'),
                    val => val <= 120 || $t('components.UserForm.ageMaxValidation')
                ]" color="primary" class="input-field" min="0" max="120">
                <template v-slot:prepend>
                    <q-icon name="cake" color="primary" />
                </template>
                <template v-slot:append>
                    <q-badge v-if="formData.age >= 18" color="positive" transparent
                        :label="$t('components.UserForm.adult')" />
                    <q-badge v-else-if="formData.age > 0" color="warning" transparent
                        :label="$t('components.UserForm.minor')" />
                </template>
                <template v-slot:hint>
                    <div class="text-caption text-grey-6">
                        {{ $t('components.UserForm.ageHint') }}
                    </div>
                </template>
            </q-input>

            <!-- Email с иконкой -->
            <q-input v-model="formData.email" type="email" :label="$t('components.UserForm.email')" outlined
                :dense="$q.screen.lt.md" :rules="[
                    val => !!val?.trim() || $t('common.validation.required'),
                    val => /.+@.+\..+/.test(val) || $t('common.validation.invalidEmail')
                ]" color="primary" class="input-field">
                <template v-slot:prepend>
                    <q-icon name="email" color="primary" />
                </template>
                <template v-slot:hint>
                    <div class="text-caption text-grey-6">
                        example@domain.com
                    </div>
                </template>
            </q-input>

            <!-- Фото (опционально) -->
            <div class="q-mt-lg" v-if="!hidePhoto">
                <div class="text-subtitle2 q-mb-xs text-grey-8">
                    {{ $t('components.UserForm.uploadPhoto') }} ({{ $t('common.optional') }})
                </div>
                <q-file v-model="photoFile" outlined :dense="$q.screen.lt.md" :label="$t('components.UserForm.photo')"
                    accept=".jpg,.jpeg,.png,.gif" max-file-size="5242880" color="primary"
                    @update:model-value="handlePhotoUpload" class="input-field">
                    <template v-slot:prepend>
                        <q-icon name="image" color="primary" />
                    </template>
                    <template v-slot:append>
                        <q-icon v-if="formData.photo" name="check_circle" color="positive" class="q-mr-xs" />
                    </template>
                    <template v-slot:hint>
                        <div class="text-caption text-grey-6">
                            {{ $t('components.UserForm.photoHint') }}
                        </div>
                    </template>
                </q-file>

                <!-- Предпросмотр фото -->
                <div v-if="formData.photo" class="q-mt-sm">
                    <div class="text-caption text-grey-7 q-mb-xs">
                        {{ $t('components.UserForm.photoPreview') }}:
                    </div>
                    <q-img :src="formData.photo" :ratio="1" width="80px" class="rounded-borders"
                        style="border: 2px solid var(--q-primary)" />
                </div>
            </div>

            <!-- Кнопки действий -->
            <div class="row justify-end q-pt-lg q-gutter-sm">
                <q-btn flat :label="$t('common.cancel')" @click="handleCancel" class="action-btn" />
                <q-btn :label="submitLabel" type="submit" color="primary" :icon="submitIcon" :loading="loading"
                    class="action-btn q-px-lg" :disable="!isFormValid">
                    <template v-slot:loading>
                        <q-spinner-hourglass class="on-left" />
                        {{ $t('common.saving') }}
                    </template>
                </q-btn>
            </div>
        </q-form>
    </q-card>
</template>

<script setup lang="ts">
import { ref, computed, watch, type PropType } from 'vue';
import { useI18n } from 'vue-i18n';
import { useQuasar } from 'quasar';
import type { User } from 'src/shared/types';

const props = defineProps({
    modelValue: {
        type: Object as PropType<Omit<User, 'id'>>,
        required: true
    },
    title: {
        type: String,
        default: () => useI18n().t('pages.UsersPage.addUser')
    },
    subtitle: {
        type: String,
        default: ''
    },
    submitLabel: {
        type: String,
        default: () => useI18n().t('common.add')
    },
    submitIcon: {
        type: String,
        default: 'person_add'
    },
    loading: {
        type: Boolean,
        default: false
    },
    hidePhoto: {
        type: Boolean,
        default: false
    },
    showClose: {
        type: Boolean,
        default: true
    }
});

const emit = defineEmits<{
    (e: 'update:modelValue', value: Omit<User, 'id'>): void;
    (e: 'submit', value: Omit<User, 'id'>): void;
    (e: 'cancel'): void;
    (e: 'close'): void;
}>();

const { t } = useI18n();
const $q = useQuasar();

// Локальная копия данных формы - не отслеживаем её изменения автоматически
const formData = ref<Omit<User, 'id'>>({ ...props.modelValue });
const photoFile = ref<File | null>(null);

// Инициализация и обновление при изменении props
watch(() => props.modelValue, (newVal) => {
    formData.value = { ...newVal };
    photoFile.value = null;
}, { deep: true, immediate: true });

// Проверка валидности формы
const isFormValid = computed(() => {
    return (
        formData.value.firstName?.trim() &&
        formData.value.lastName?.trim() &&
        formData.value.age != null &&
        formData.value.age >= 0 &&
        formData.value.email?.trim() &&
        /.+@.+\..+/.test(formData.value.email)
    );
});

// Обработка загрузки фото
const handlePhotoUpload = (file: File | null) => {
    if (!file) {
        formData.value.photo = null;
        return;
    }

    const reader = new FileReader();
    reader.onload = (e) => {
        formData.value.photo = e.target?.result as string;
    };
    reader.readAsDataURL(file);
};

// Отмена
const handleCancel = () => {
    // Сбрасываем форму к исходным значениям
    formData.value = { ...props.modelValue };
    photoFile.value = null;
    emit('cancel');
};

// Отправка формы
const handleSubmit = () => {
    if (!isFormValid.value) {
        $q.notify({
            type: 'warning',
            message: t('common.validation.requiredFields'),
            position: 'top'
        });
        return;
    }

    // Эмитим событие с данными формы
    emit('submit', { ...formData.value });

    // Очищаем форму после успешного сабмита
    if (props.submitLabel === t('common.add')) {
        formData.value = {
            firstName: '',
            lastName: '',
            age: 20,
            email: '',
            photo: null,
        };
        photoFile.value = null;
    }
};
</script>

<style scoped lang="scss">
.user-form-card {
    overflow: hidden;

    @media (max-width: $breakpoint-sm) {
        min-width: 100%;
    }
}

.action-btn {
    min-width: 100px;
    border-radius: 8px;
    font-weight: 500;
    transition: all 0.2s ease;

    &:hover:not(:disabled) {
        transform: translateY(-1px);
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
    }

    &:active:not(:disabled) {
        transform: translateY(0);
    }
}
</style>