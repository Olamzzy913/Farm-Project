import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
const Home = () => import('@/views/HomeView.vue')
const Register = () => import('../views/RegisterView.vue')
const Login = () => import('../views/LoginView.vue')
const Forget = () => import('../views/ForgetPassword.vue')
const Verify = () => import('../views/VerifyUser.vue')
const User = () => import('../views/UserView.vue')
const Status = () => import('../views/StatusView.vue')

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/forget',
      name: 'forget',
      component: Forget
    },
    {
      path: '/verify',
      name: 'verify',
      component: Verify
    },
    {
      path: '/user',
      name: 'user',
      component: User
    },
    {
      path: '/status',
      name: 'status',
      component: Status
    },
    {
      path: '/:catchAll(.*)*',
      redirect: { name: 'home' }
    }
  ]
})

router.beforeResolve((to, from, next) => {
  // If this isn't an initial page load.
  if (to.name) {
    // Start the route progress bar.
    NProgress.start()
  }
  next()
})

router.afterEach(() => {
  // Complete the animation of the route progress bar.
  NProgress.done()
})

export default router
