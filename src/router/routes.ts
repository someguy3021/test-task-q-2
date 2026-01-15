import type { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/AboutThisProjectPage.vue') },
      { path: 'users', name: 'users', component: () => import('src/pages/UsersPage.vue') },
      { path: 'dashboard', name: 'dashboard', component: () => import('src/pages/DashboardPage.vue') },],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
