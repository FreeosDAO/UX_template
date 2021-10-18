const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/test', component: () => import('pages/Test.vue') },
      { path: '/survey', component: () => import('pages/Survey.vue') },
      { path: '/vote', component: () => import('pages/Vote.vue') },
      { path: '/congs', component: () => import('pages/congr_survey.vue') },
      { path: '/ratify', component: () => import('pages/ratify.vue') }
    ]
  },
  // Always leave this as last one,
  // but you can also remove it
  {
    path: '*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
