import { createRouter, createWebHistory } from 'vue-router'
import NProgress from 'nprogress'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/register',
      name: 'register',
      component: () => import('../views/RegisterView.vue')
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('../views/LoginView.vue')
    },
    {
      path: '/forget',
      name: 'forget',
      component: () => import('../views/ForgetPassword.vue')
    },
    {
      path: '/verify',
      name: 'verify',
      component: () => import('../views/VerifyUser.vue')
    },
    {
      path: '/user',
      name: 'user',
      component: () => import('../views/UserView.vue')
    },
    {
      path: '/status',
      name: 'status',
      component: () => import('../views/StatusView.vue')
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
