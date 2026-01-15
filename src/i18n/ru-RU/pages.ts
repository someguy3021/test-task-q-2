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
    techStack: {
      title: '🛠 Технологический стек',
      subtitle: 'Современный стек для SPA-приложения'
    },
    architecture: {
      title: '🏗 Архитектура проекта',
      subtitle: 'Feature-based структура с модульным подходом'
    },
    statistics: {
      title: '📊 Статистика проекта',
      subtitle: 'Цифры и факты'
    },
    features: {
      title: '✨ Особенности',
      subtitle: 'Ключевые технические решения'
    },
    additionalInfo: {
      title: '📝 Дополнительная информация',
      buildDeploy: 'Сборка и деплой:',
      dev: 'Разработка:',
      build: 'Сборка:',
      deploy: 'Деплой на платформе Vercel'
    },
    technologies: [
      {
        name: 'Quasar Framework',
        description: 'Vue.js фреймворк с Material Design'
      },
      {
        name: 'Vue 3',
        description: 'Композиционный API, TypeScript'
      },
      {
        name: 'Pinia',
        description: 'State management для Vue 3'
      },
      {
        name: 'Vue Router',
        description: 'Клиентская маршрутизация'
      },
      {
        name: 'TypeScript',
        description: 'Статическая типизация'
      },
      {
        name: 'Vue I18n',
        description: 'Мультиязычная поддержка'
      }
    ],
    architectureItems: [
      {
        title: 'Feature-Based Structure',
        subtitle: 'Модульная организация кода',
        description: 'Проект организован по функциональным модулям (features) для лучшей масштабируемости и переиспользования кода.',
        tags: ['users', 'auth', 'scalable']
      },
      {
        title: 'Shared Layer',
        subtitle: 'Общие компоненты и утилиты',
        description: 'Централизованное хранение общих компонентов, типов, констант и хранилищ для обеспечения консистентности.',
        tags: ['components', 'types', 'stores']
      },
      {
        title: 'Internationalization',
        subtitle: 'Поддержка 3 языков',
        description: 'Полная поддержка английского, русского и испанского языков с системой плагинов Quasar.',
        tags: ['i18n', 'en-US', 'ru-RU', 'es-ES']
      },
      {
        title: 'Theme System',
        subtitle: 'Светлая и тёмная темы',
        description: 'Гибкая система тем с кастомными цветами для обоих режимов отображения.',
        tags: ['light', 'dark']
      }
    ],
    stats: [
      { label: 'Всего файлов', value: '40' },
      { label: 'Vue компоненты', value: '7' },
      { label: 'TypeScript файлы', value: '20+' },
      { label: 'Языки поддержки', value: '3' },
      { label: 'Зависимости', value: '20' }
    ],
    featuresList: [
      {
        title: 'Адаптивный дизайн',
        description: 'Полная поддержка мобильных и десктопных устройств'
      },
      {
        title: 'TypeScript First',
        description: 'Строгая типизация для надежности кода'
      },
      {
        title: 'Quasar Components',
        description: 'Использование готовых Material Design компонентов'
      }
    ]
  },
  ErrorNotFound: {
    title: 'Упс! Здесь ничего нет...',
    message: 'Страница, которую вы ищете, не существует',
    goHome: 'На главную'
  }
} as const