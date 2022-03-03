
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') },
       { path: '/'+'Dashboard', component: () => import('pages/'+'Dashboard'+'.vue') },  { path: '/'+'Posts', component: () => import('pages/'+'Posts'+'.vue') }, 
    ]
  },

  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/Error404.vue')
  }
]

export default routes
