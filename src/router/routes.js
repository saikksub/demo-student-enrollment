
const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/account',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Account.vue') }
    ]
  },
  {
    path: '/students',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Students.vue') }
    ]
  },
  {
    path: '/classes',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/Classes.vue') }
    ]
  },
  {
    path: '/student/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/student/id.vue') }
    ]
  },
  {
    path: '/class/:id',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/class/id.vue') }
    ]
  }
]

export default routes
