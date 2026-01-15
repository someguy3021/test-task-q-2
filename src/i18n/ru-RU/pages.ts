export default {
  UsersPage: {
    title: 'Управление пользователями',
    subtitle: 'Показано {filtered} из {count} пользователей',
    addUser: 'Добавить пользователя',
    filterAdults: 'Показать только взрослых (18+)',
    sortBy: 'Сортировать по',
    sortByName: 'Имени',
    sortByAge: 'Возрасту',
    sortByEmail: 'Email',
    sortAscending: 'Сортировка по возрастанию',
    sortDescending: 'Сортировка по убыванию',
    toggleSortDirection: 'Изменить направление сортировки',
    noUsers: 'Пользователи не найдены',
    noUsersDescription: 'Попробуйте изменить фильтры или добавьте нового пользователя',
    addFirstUser: 'Добавить первого пользователя',
    firstName: 'Имя',
    lastName: 'Фамилия',
    age: 'Возраст',
    email: 'Email',
  },
  AboutThisProjectPage: {
    title: 'О выполнении тестового задания',
    subtitle: 'Обзор архитектуры и технических решений проекта',
    tech: {
      title: '🛠 Технологический стек',
      subtitle: 'Современный стек для SPA-приложения',
      quasar: {
        name: 'Quasar Framework',
        desc: 'Vue.js фреймворк с Material Design'
      },
      vue: {
        name: 'Vue 3',
        desc: 'Композиционный API, TypeScript'
      },
      pinia: {
        name: 'Pinia',
        desc: 'State management для Vue 3'
      },
      router: {
        name: 'Vue Router',
        desc: 'Клиентская маршрутизация'
      },
      typescript: {
        name: 'TypeScript',
        desc: 'Статическая типизация'
      },
      i18n: {
        name: 'Vue I18n',
        desc: 'Мультиязычная поддержка'
      }
    },
    architecture: {
      title: '🏗 Архитектура проекта',
      subtitle: 'Feature-based структура с модульным подходом',
      feature: {
        title: 'Feature-Based Structure',
        subtitle: 'Модульная организация кода',
        desc: 'Проект организован по функциональным модулям (features) для лучшей масштабируемости и переиспользования кода.',
        tags: {
          users: 'users',
          auth: 'auth',
          scalable: 'scalable'
        }
      },
      shared: {
        title: 'Shared Layer',
        subtitle: 'Общие компоненты и утилиты',
        desc: 'Централизованное хранение общих компонентов, типов, констант и хранилищ для обеспечения консистентности.',
        tags: {
          components: 'components',
          types: 'types',
          stores: 'stores'
        }
      },
      i18n: {
        title: 'Internationalization',
        subtitle: 'Поддержка 3 языков',
        desc: 'Полная поддержка английского, русского и испанского языков с системой плагинов Quasar.',
        tags: {
          i18n: 'i18n',
          en: 'en-US',
          ru: 'ru-RU',
          es: 'es-ES'
        }
      },
      theme: {
        title: 'Theme System',
        subtitle: 'Светлая и тёмная темы',
        desc: 'Гибкая система тем с кастомными цветами для обоих режимов отображения.',
        tags: {
          light: 'light',
          dark: 'dark'
        }
      }
    },
    stats: {
      title: '📊 Статистика проекта',
      subtitle: 'Цифры и факты',
      totalFiles: 'Всего файлов',
      vueComponents: 'Vue компоненты',
      typescriptFiles: 'TypeScript файлы',
      languages: 'Мультиязычность',
      dependencies: 'Зависимости'
    },
    features: {
      title: '✨ Особенности',
      subtitle: 'Ключевые технические решения',
      responsive: {
        title: 'Адаптивный дизайн',
        desc: 'Полная поддержка мобильных и десктопных устройств'
      },
      typescript: {
        title: 'TypeScript First',
        desc: 'Строгая типизация для надежности кода'
      },
      quasar: {
        title: 'Quasar Components',
        desc: 'Использование готовых Material Design компонентов'
      }
    },
    additional: {
      title: '📝 Дополнительная информация',
      buildDeploy: 'Сборка и деплой:',
      dev: 'Разработка: quasar dev',
      build: 'Сборка: quasar build',
      deploy: 'Деплой на платформе Vercel'
    }
  },
  ErrorNotFound: {
    title: 'Упс! Здесь ничего нет...',
    message: 'Страница, которую вы ищете, не существует',
    goHome: 'На главную'
  }
} as const