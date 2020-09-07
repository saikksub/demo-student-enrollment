
const routes = [
  {
    path: '/',
    component: () => import('layouts/Splash.vue'),
    children: [
      { path: '', component: () => import('pages/Index.vue') }
    ]
  },
  {
    path: '/signin',
    component: () => import('layouts/Auth.vue'),
    children: [
      { path: '', component: () => import('pages/Signin.vue') }
    ]
  },
  {
    path: '/signup',
    component: () => import('layouts/Auth.vue'),
    children: [
      { path: '', component: () => import('pages/Signup.vue') }
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
