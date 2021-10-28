const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
      { path: '/test', component: () => import('pages/Test.vue') },
      { path: '/survey', component: () => import('pages/Survey.vue') },
      { path: '/vote', component: () => import('pages/Vote.vue') },
      { path: '/congs', component: () => import('pages/congrats.vue') },
      { path: '/ratify', component: () => import('pages/ratify.vue') },
      { path: '/land', component: () => import('pages/landing.vue') },
      { path: '/econ', component: () => import('pages/Economy.vue') },
      { path: '/myfre', component: () => import('pages/Myfreeos.vue') },
      { path: '/mint', component: () => import('pages/Mintconv.vue') },
      { path: '/goal', component: () => import('pages/Goalsreward.vue') }
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
