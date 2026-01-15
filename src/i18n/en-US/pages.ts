export default {
  users: {
    title: 'Users Management',
    subtitle: 'Showing {filtered} of {count} users',
    addUser: 'Add User',
    filterAdults: 'Show only adults (18+)',
    sortBy: 'Sort by',
    sortByName: 'Name',
    sortByAge: 'Age',
    sortByEmail: 'Email',
    sortAscending: 'Sort ascending',
    sortDescending: 'Sort descending',
    toggleSortDirection: 'Toggle sort direction',
    noUsers: 'No users found',
    noUsersDescription: 'Try changing your filters or add a new user',
    addFirstUser: 'Add First User',
    firstName: 'First Name',
    lastName: 'Last Name',
    age: 'Age',
    email: 'Email',
  },
  about: {
    title: 'About the Test Task',
    subtitle: 'Overview of project architecture and technical solutions',
    techStack: {
      title: '🛠 Technology Stack',
      subtitle: 'Modern stack for SPA application'
    },
    architecture: {
      title: '🏗 Project Architecture',
      subtitle: 'Feature-based structure with modular approach'
    },
    statistics: {
      title: '📊 Project Statistics',
      subtitle: 'Numbers and facts'
    },
    features: {
      title: '✨ Features',
      subtitle: 'Key technical decisions'
    },
    additionalInfo: {
      title: '📝 Additional Information',
      buildDeploy: 'Build and Deploy:',
      dev: 'Development:',
      build: 'Build:',
      deploy: 'Deployment on Vercel platform'
    },
    technologies: [
      {
        name: 'Quasar Framework',
        description: 'Vue.js framework with Material Design'
      },
      {
        name: 'Vue 3',
        description: 'Composition API, TypeScript'
      },
      {
        name: 'Pinia',
        description: 'State management for Vue 3'
      },
      {
        name: 'Vue Router',
        description: 'Client-side routing'
      },
      {
        name: 'TypeScript',
        description: 'Static typing'
      },
      {
        name: 'Vue I18n',
        description: 'Multi-language support'
      }
    ],
    architectureItems: [
      {
        title: 'Feature-Based Structure',
        subtitle: 'Modular code organization',
        description: 'The project is organized by functional modules (features) for better scalability and code reuse.',
        tags: ['users', 'auth', 'scalable']
      },
      {
        title: 'Shared Layer',
        subtitle: 'Common components and utilities',
        description: 'Centralized storage of common components, types, constants, and stores to ensure consistency.',
        tags: ['components', 'types', 'stores']
      },
      {
        title: 'Internationalization',
        subtitle: 'Support for 3 languages',
        description: 'Full support for English, Russian and Spanish with Quasar plugin system.',
        tags: ['i18n', 'en-US', 'ru-RU', 'es-ES']
      },
      {
        title: 'Theme System',
        subtitle: 'Light and dark themes',
        description: 'Flexible theme system with custom colors for both display modes.',
        tags: ['light', 'dark']
      }
    ],
    stats: [
      { label: 'Total files', value: '40' },
      { label: 'Vue components', value: '7' },
      { label: 'TypeScript files', value: '20+' },
      { label: 'Supported languages', value: '3' },
      { label: 'Dependencies', value: '20' }
    ],
    featuresList: [
      {
        title: 'Responsive Design',
        description: 'Full support for mobile and desktop devices'
      },
      {
        title: 'TypeScript First',
        description: 'Strict typing for code reliability'
      },
      {
        title: 'Quasar Components',
        description: 'Using ready-made Material Design components'
      }
    ]
  }
} as const