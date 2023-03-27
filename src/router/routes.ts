import { RouteRecordRaw } from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/BEXLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('components/CalculatorComponent.vue'),
      },
    ],
  },
  {
    path: '/options',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/OptionsPage.vue'),
      },
    ],
  },
  {
    path: '/popup',
    component: () => import('layouts/BEXLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/PopupPage.vue'),
      },
      {
        path: '/tape',
        component: () => import('pages/PopupPage.vue'),
      },
    ],
  },
  {
    path: '/devtools',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {
        path: '',
        component: () => import('pages/DevToolsPage.vue'),
      },
    ],
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
