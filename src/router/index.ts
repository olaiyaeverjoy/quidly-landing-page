import { createRouter, createWebHistory } from 'vue-router'

import Homeview from '../views/Homeview.vue'
import SellDesk from '../views/SellDesk.vue'
import Pay4me from '@/views/Pay4me.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  routes: [
    {
      path: '/',
      name: 'home',
      component: Homeview,
    },
    {
      path: '/selldesk',
      name: 'selldesk',
      component: SellDesk,
    },
    {
      path: '/pay4me',
      name: 'pay4me',
      component: Pay4me,
    },
  ],
})

export default router