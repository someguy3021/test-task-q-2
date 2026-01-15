<template>
    <q-page class="about-page q-pa-lg">
        <div class="container">
            <!-- Заголовок -->
            <div class="row q-mb-xl">
                <div class="col-12">
                    <h1 class="text-h3 text-weight-bold q-mb-md">
                        {{ $t('pages.about.title') }}
                    </h1>
                    <div class="text-subtitle1 ">
                        {{ $t('pages.about.subtitle') }}
                    </div>
                </div>
            </div>

            <!-- Основной контент -->
            <div class="row q-col-gutter-lg">
                <!-- Левая колонка - Технологии -->
                <div class="col-12 col-md-8">
                    <!-- Технологический стек -->
                    <q-card class="tech-card q-mb-lg" flat bordered>
                        <q-card-section class="bg-primary text-white">
                            <div class="text-h5 q-mb-sm">{{ $t('pages.about.techStack.title') }}</div>
                            <div class="text-caption opacity-70">
                                {{ $t('pages.about.techStack.subtitle') }}
                            </div>
                        </q-card-section>

                        <q-card-section>
                            <div class="row q-col-gutter-md">
                                <div class="col-12 col-sm-6" v-for="(tech, index) in technologies" :key="index">
                                    <q-item class="tech-item q-pa-sm">
                                        <q-item-section avatar>
                                            <q-icon :name="tech.icon" :color="tech.color" size="28px" />
                                        </q-item-section>
                                        <q-item-section>
                                            <q-item-label class="text-weight-medium">
                                                {{ $t(`pages.about.technologies.${index}.name`) }}
                                            </q-item-label>
                                            <q-item-label caption class="">
                                                {{ $t(`pages.about.technologies.${index}.description`) }}
                                            </q-item-label>
                                        </q-item-section>
                                    </q-item>
                                </div>
                            </div>
                        </q-card-section>
                    </q-card>

                    <!-- Архитектура -->
                    <q-card class="arch-card q-mb-lg" flat bordered>
                        <q-card-section class="bg-accent text-white">
                            <div class="text-h5 q-mb-sm">{{ $t('pages.about.architecture.title') }}</div>
                            <div class="text-caption opacity-70">
                                {{ $t('pages.about.architecture.subtitle') }}
                            </div>
                        </q-card-section>

                        <q-card-section>
                            <q-timeline color="secondary" class="q-mt-md">
                                <q-timeline-entry v-for="(item, index) in architecture" :key="index"
                                    :title="$t(`pages.about.architectureItems.${index}.title`)"
                                    :subtitle="$t(`pages.about.architectureItems.${index}.subtitle`)" :icon="item.icon"
                                    :color="item.color">
                                    <div class="text-body2 q-mt-sm">
                                        {{ $t(`pages.about.architectureItems.${index}.description`) }}
                                    </div>
                                    <q-chip v-for="(tag, tagIndex) in item.tags" :key="tagIndex" size="sm"
                                        :color="item.color" text-color="white" class="q-mt-xs q-mr-xs">
                                        {{ tag }}
                                    </q-chip>
                                </q-timeline-entry>
                            </q-timeline>
                        </q-card-section>
                    </q-card>
                </div>

                <!-- Правая колонка - Статистика -->
                <div class="col-12 col-md-4">
                    <!-- Статистика проекта -->
                    <q-card class="stats-card q-mb-lg" flat bordered>
                        <q-card-section class="bg-secondary text-white">
                            <div class="text-h5 q-mb-sm">{{ $t('pages.about.statistics.title') }}</div>
                            <div class="text-caption opacity-70">
                                {{ $t('pages.about.statistics.subtitle') }}
                            </div>
                        </q-card-section>

                        <q-card-section>
                            <div class="column q-gutter-y-md">
                                <div class="stat-item" v-for="(stat, index) in stats" :key="index">
                                    <div class="row items-center justify-between">
                                        <div class="col">
                                            <div class="text-body2 ">
                                                {{ $t(`pages.about.stats.${index}.label`) }}
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <div class="text-h6 text-weight-bold" :style="{ color: stat.color }">
                                                {{ stat.progress }}
                                            </div>
                                        </div>
                                    </div>
                                    <q-linear-progress v-if="stat.progress" :value="stat.progress" :color="stat.color"
                                        class="q-mt-xs" />
                                </div>
                            </div>
                        </q-card-section>
                    </q-card>

                    <!-- Особенности реализации -->
                    <q-card class="features-card" flat bordered>
                        <q-card-section class="bg-positive text-white">
                            <div class="text-h5 q-mb-sm">{{ $t('pages.about.features.title') }}</div>
                            <div class="text-caption opacity-70">
                                {{ $t('pages.about.features.subtitle') }}
                            </div>
                        </q-card-section>

                        <q-card-section>
                            <q-list bordered separator>
                                <q-item v-for="(feature, index) in features" :key="index" class="q-py-md">
                                    <q-item-section avatar>
                                        <q-icon :name="feature.icon" :color="feature.color" />
                                    </q-item-section>
                                    <q-item-section>
                                        <q-item-label class="text-weight-medium">
                                            {{ $t(`pages.about.featuresList.${index}.title`) }}
                                        </q-item-label>
                                        <q-item-label caption lines="2">
                                            {{ $t(`pages.about.featuresList.${index}.description`) }}
                                        </q-item-label>
                                    </q-item-section>
                                </q-item>
                            </q-list>
                        </q-card-section>
                    </q-card>
                </div>
            </div>

            <!-- Дополнительная информация -->
            <div class="row q-mt-xl">
                <div class="col-12">
                    <q-card class="info-card" flat bordered>
                        <q-card-section>
                            <div class="text-h5 q-mb-md text-weight-medium">
                                {{ $t('pages.about.additionalInfo.title') }}
                            </div>
                            <div class="row q-col-gutter-md">
                                <div class="col-12 col-sm-6">
                                    <div class="text-body1 q-mb-sm">
                                        <strong>{{ $t('pages.about.additionalInfo.buildDeploy') }}</strong>
                                    </div>
                                    <ul class="q-pl-md">
                                        <li>{{ $t('pages.about.additionalInfo.dev') }} <code>quasar dev</code></li>
                                        <li>{{ $t('pages.about.additionalInfo.build') }} <code>quasar build</code></li>
                                        <li>{{ $t('pages.about.additionalInfo.deploy') }}</li>
                                    </ul>
                                </div>
                            </div>
                        </q-card-section>
                    </q-card>
                </div>
            </div>
        </div>
    </q-page>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';
import { useI18n } from 'vue-i18n';

const { t } = useI18n();

// Технологии
const technologies = computed(() => [
    {
        icon: 'rocket_launch',
        color: 'primary',
    },
    {
        icon: 'view_in_ar',
        color: 'positive',
    },
    {
        icon: 'storage',
        color: 'accent',
    },
    {
        icon: 'signpost',
        color: 'info',
    },
    {
        icon: 'code',
        color: 'secondary',
    },
    {
        icon: 'translate',
        color: 'warning',
    }
]);

// Архитектура
const architecture = computed(() => [
    {
        icon: 'widgets',
        color: 'primary',
        tags: ['users', 'auth', 'scalable']
    },
    {
        icon: 'share',
        color: 'secondary',
        tags: ['components', 'types', 'stores']
    },
    {
        icon: 'language',
        color: 'accent',
        tags: ['i18n', 'en-US', 'ru-RU', 'es-ES']
    },
    {
        icon: 'palette',
        color: 'positive',
        tags: ['light', 'dark']
    }
]);

// Статистика
const stats = computed(() => [
    {
        color: 'var(--q-primary)',
        progress: 1
    },
    {
        color: 'var(--q-positive)',
        progress: 0.7
    },
    {
        color: 'var(--q-secondary)',
        progress: 0.8
    },
    {
        color: 'var(--q-accent)',
        progress: 0.6
    },
    {
        color: 'var(--q-info)',
        progress: 1
    }
]);

// Особенности
const features = computed(() => [
    {
        icon: 'devices',
        color: 'primary',
    },
    {
        icon: 'security',
        color: 'secondary',
    },
    {
        icon: 'view_quilt',
        color: 'positive',
    }
]);
</script>

<style lang="scss" scoped>
.about-page {
    transition: all 0.3s ease;

    .container {
        max-width: 1200px;
        margin: 0 auto;
    }
}

// Утилитарные классы для цветов
.bg-utility {
    background: var(--q-pageUtility);
}

.opacity-70 {
    opacity: 0.7;
}

// Стили карточек
.tech-card,
.arch-card,
.stats-card,
.features-card,
.info-card {
    background: var(--q-pageUtility);
    border-color: var(--q-pageUtilityContrastLow);
    transition: all 0.3s ease;

    &:hover {
        transform: translateY(-2px);
        box-shadow: 0 8px 25px rgba(0, 0, 0, 0.1);
    }
}

.tech-item {
    border-radius: 8px;
    transition: all 0.3s ease;

    &:hover {
        background: var(--q-sliderEnds);
    }
}

.stat-item {
    padding: 8px 0;
    border-bottom: 1px solid var(--q-pageUtilityContrastLow);

    &:last-child {
        border-bottom: none;
    }
}

// Темная тема
.body--dark {

    .tech-card,
    .arch-card,
    .stats-card,
    .features-card,
    .info-card {
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);

        &:hover {
            box-shadow: 0 8px 30px rgba(0, 0, 0, 0.4);
        }
    }

    .tech-item:hover {
        background: rgba(255, 255, 255, 0.05);
    }
}

// Адаптивность
@media (max-width: 600px) {
    .about-page {
        padding: 16px !important;
    }
}

// Анимации
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(20px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
</style>