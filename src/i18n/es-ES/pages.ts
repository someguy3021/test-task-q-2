export default {
  users: {
    title: 'Gestión de usuarios',
    subtitle: 'Mostrando {filtered} de {count} usuarios',
    addUser: 'Agregar usuario',
    filterAdults: 'Mostrar solo adultos (18+)',
    sortBy: 'Ordenar por',
    sortByName: 'Nombre',
    sortByAge: 'Edad',
    sortByEmail: 'Correo electrónico',
    sortAscending: 'Orden ascendente',
    sortDescending: 'Orden descendente',
    toggleSortDirection: 'Cambiar dirección de ordenación',
    noUsers: 'No se encontraron usuarios',
    noUsersDescription: 'Intente cambiar los filtros o agregue un nuevo usuario',
    addFirstUser: 'Agregar primer usuario',
    firstName: 'Nombre',
    lastName: 'Apellido',
    age: 'Edad',
    email: 'Correo electrónico',
  },
  about: {
    title: 'Sobre la tarea de prueba',
    subtitle: 'Descripción general de la arquitectura y soluciones técnicas del proyecto',
    techStack: {
      title: '🛠 Pila tecnológica',
      subtitle: 'Pila moderna para aplicación SPA'
    },
    architecture: {
      title: '🏗 Arquitectura del proyecto',
      subtitle: 'Estructura basada en características con enfoque modular'
    },
    statistics: {
      title: '📊 Estadísticas del proyecto',
      subtitle: 'Números y hechos'
    },
    features: {
      title: '✨ Características',
      subtitle: 'Decisiones técnicas clave'
    },
    additionalInfo: {
      title: '📝 Información adicional',
      buildDeploy: 'Construcción y despliegue:',
      dev: 'Desarrollo:',
      build: 'Construcción:',
      deploy: 'Despliegue en la plataforma Vercel'
    },
    technologies: [
      {
        name: 'Quasar Framework',
        description: 'Framework Vue.js con Material Design'
      },
      {
        name: 'Vue 3',
        description: 'API de composición, TypeScript'
      },
      {
        name: 'Pinia',
        description: 'Gestión de estado para Vue 3'
      },
      {
        name: 'Vue Router',
        description: 'Enrutamiento del lado del cliente'
      },
      {
        name: 'TypeScript',
        description: 'Tipado estático'
      },
      {
        name: 'Vue I18n',
        description: 'Soporte multilingüe'
      }
    ],
    architectureItems: [
      {
        title: 'Estructura basada en características',
        subtitle: 'Organización modular del código',
        description: 'El proyecto está organizado por módulos funcionales (características) para una mejor escalabilidad y reutilización del código.',
        tags: ['users', 'auth', 'scalable']
      },
      {
        title: 'Capa compartida',
        subtitle: 'Componentes y utilidades comunes',
        description: 'Almacenamiento centralizado de componentes, tipos, constantes y almacenes comunes para garantizar la coherencia.',
        tags: ['components', 'types', 'stores']
      },
      {
        title: 'Internacionalización',
        subtitle: 'Soporte para 3 idiomas',
        description: 'Soporte completo para inglés, ruso y español con el sistema de complementos de Quasar.',
        tags: ['i18n', 'en-US', 'ru-RU', 'es-ES']
      },
      {
        title: 'Sistema de temas',
        subtitle: 'Temas claros y oscuros',
        description: 'Sistema de temas flexible con colores personalizados para ambos modos de visualización.',
        tags: ['light', 'dark']
      }
    ],
    stats: [
      { label: 'Archivos totales', value: '40' },
      { label: 'Componentes Vue', value: '7' },
      { label: 'Archivos TypeScript', value: '20+' },
      { label: 'Idiomas admitidos', value: '3' },
      { label: 'Dependencias', value: '20' }
    ],
    featuresList: [
      {
        title: 'Diseño responsivo',
        description: 'Soporte completo para dispositivos móviles y de escritorio'
      },
      {
        title: 'TypeScript primero',
        description: 'Tipado estricto para la confiabilidad del código'
      },
      {
        title: 'Componentes Quasar',
        description: 'Uso de componentes Material Design listos para usar'
      }
    ]
  }
} as const