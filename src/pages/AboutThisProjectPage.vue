<template>
    <q-page class="about-page q-pa-lg">
        <div class="container">
            <!-- Заголовок -->
            <div class="row q-mb-xl">
                <div class="col-12">
                    <h1 class="text-h3 text-weight-bold q-mb-md">
                        О выполнении тестового задания
                    </h1>
                    <div class="text-subtitle1 ">
                        Обзор архитектуры и технических решений проекта
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
                            <div class="text-h5 q-mb-sm">🛠 Технологический стек</div>
                            <div class="text-caption opacity-70">
                                Современный стек для SPA-приложения
                            </div>
                        </q-card-section>

                        <q-card-section>
                            <div class="row q-col-gutter-md">
                                <div class="col-12 col-sm-6" v-for="tech in technologies" :key="tech.name">
                                    <q-item class="tech-item q-pa-sm">
                                        <q-item-section avatar>
                                            <q-icon :name="tech.icon" :color="tech.color" size="28px" />
                                        </q-item-section>
                                        <q-item-section>
                                            <q-item-label class="text-weight-medium">
                                                {{ tech.name }}
                                            </q-item-label>
                                            <q-item-label caption class="">
                                                {{ tech.description }}
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
                            <div class="text-h5 q-mb-sm">🏗 Архитектура проекта</div>
                            <div class="text-caption opacity-70">
                                Feature-based структура с модульным подходом
                            </div>
                        </q-card-section>

                        <q-card-section>
                            <q-timeline color="secondary" class="q-mt-md">
                                <q-timeline-entry v-for="item in architecture" :key="item.title" :title="item.title"
                                    :subtitle="item.subtitle" :icon="item.icon" :color="item.color">
                                    <div class="text-body2 q-mt-sm">
                                        {{ item.description }}
                                    </div>
                                    <q-chip v-for="tag in item.tags" :key="tag" size="sm" :color="item.color"
                                        text-color="white" class="q-mt-xs q-mr-xs">
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
                            <div class="text-h5 q-mb-sm">📊 Статистика проекта</div>
                            <div class="text-caption opacity-70">
                                Цифры и факты
                            </div>
                        </q-card-section>

                        <q-card-section>
                            <div class="column q-gutter-y-md">
                                <div class="stat-item" v-for="stat in stats" :key="stat.label">
                                    <div class="row items-center justify-between">
                                        <div class="col">
                                            <div class="text-body2 ">
                                                {{ stat.label }}
                                            </div>
                                        </div>
                                        <div class="col-auto">
                                            <div class="text-h6 text-weight-bold" :style="{ color: stat.color }">
                                                {{ stat.value }}
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
                            <div class="text-h5 q-mb-sm">✨ Особенности</div>
                            <div class="text-caption opacity-70">
                                Ключевые технические решения
                            </div>
                        </q-card-section>

                        <q-card-section>
                            <q-list bordered separator>
                                <q-item v-for="feature in features" :key="feature.title" class="q-py-md">
                                    <q-item-section avatar>
                                        <q-icon :name="feature.icon" :color="feature.color" />
                                    </q-item-section>
                                    <q-item-section>
                                        <q-item-label class="text-weight-medium">
                                            {{ feature.title }}
                                        </q-item-label>
                                        <q-item-label caption lines="2">
                                            {{ feature.description }}
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
                                📝 Дополнительная информация
                            </div>
                            <div class="row q-col-gutter-md">
                                <div class="col-12 col-sm-6">
                                    <div class="text-body1 q-mb-sm">
                                        <strong>Сборка и деплой:</strong>
                                    </div>
                                    <ul class="q-pl-md">
                                        <li>Разработка: <code>quasar dev</code></li>
                                        <li>Сборка: <code>quasar build</code></li>
                                        <li>Деплой на платформе Vercel</li>
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
import { ref } from 'vue';

// Технологии
const technologies = ref([
    {
        name: 'Quasar Framework',
        icon: 'rocket_launch',
        color: 'primary',
        description: 'Vue.js фреймворк с Material Design'
    },
    {
        name: 'Vue 3',
        icon: 'view_in_ar',
        color: 'positive',
        description: 'Композиционный API, TypeScript'
    },
    {
        name: 'Pinia',
        icon: 'storage',
        color: 'accent',
        description: 'State management для Vue 3'
    },
    {
        name: 'Vue Router',
        icon: 'signpost',
        color: 'info',
        description: 'Клиентская маршрутизация'
    },
    {
        name: 'TypeScript',
        icon: 'code',
        color: 'secondary',
        description: 'Статическая типизация'
    },
    {
        name: 'Vue I18n',
        icon: 'translate',
        color: 'warning',
        description: 'Мультиязычная поддержка'
    }
]);

// Архитектура
const architecture = ref([
    {
        title: 'Feature-Based Structure',
        subtitle: 'Модульная организация кода',
        icon: 'widgets',
        color: 'primary',
        description: 'Проект организован по функциональным модулям (features) для лучшей масштабируемости и переиспользования кода.',
        tags: ['users', 'auth', 'scalable']
    },
    {
        title: 'Shared Layer',
        subtitle: 'Общие компоненты и утилиты',
        icon: 'share',
        color: 'secondary',
        description: 'Централизованное хранение общих компонентов, типов, констант и хранилищ для обеспечения консистентности.',
        tags: ['components', 'types', 'stores']
    },
    {
        title: 'Internationalization',
        subtitle: 'Поддержка 3 языков',
        icon: 'language',
        color: 'accent',
        description: 'Полная поддержка английского, русского и испанского языков с системой плагинов Quasar.',
        tags: ['i18n', 'en-US', 'ru-RU', 'es-ES']
    },
    {
        title: 'Theme System',
        subtitle: 'Светлая и тёмная темы',
        icon: 'palette',
        color: 'positive',
        description: 'Гибкая система тем с кастомными цветами для обоих режимов отображения.',
        tags: ['light', 'dark']
    }
]);

// Статистика
const stats = ref([
    {
        label: 'Всего файлов',
        value: '40',
        color: 'var(--q-primary)',
        progress: 1
    },
    {
        label: 'Vue компоненты',
        value: '7',
        color: 'var(--q-positive)',
        progress: 0.7
    },
    {
        label: 'TypeScript файлы',
        value: '20+',
        color: 'var(--q-secondary)',
        progress: 0.8
    },
    {
        label: 'Языки поддержки',
        value: '3',
        color: 'var(--q-accent)',
        progress: 0.6
    },
    {
        label: 'Зависимости',
        value: '20',
        color: 'var(--q-info)',
        progress: 1
    }
]);

// Особенности
const features = ref([
    {
        title: 'Адаптивный дизайн',
        icon: 'devices',
        color: 'primary',
        description: 'Полная поддержка мобильных и десктопных устройств'
    },
    {
        title: 'TypeScript First',
        icon: 'security',
        color: 'secondary',
        description: 'Строгая типизация для надежности кода'
    },
    {
        title: 'Quasar Components',
        icon: 'view_quilt',
        color: 'positive',
        description: 'Использование готовых Material Design компонентов'
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

.tech-card,
.arch-card,
.stats-card,
.features-card {
    animation: fadeIn 0.5s ease forwards;
}

.tech-card {
    animation-delay: 0.1s;
}

.arch-card {
    animation-delay: 0.2s;
}

.stats-card {
    animation-delay: 0.3s;
}

.features-card {
    animation-delay: 0.4s;
}
</style>