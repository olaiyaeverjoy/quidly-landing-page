import { createRouter, createWebHistory } from 'vue-router'

import Homeview from '../views/Homeview.vue'
import SellDesk from '../views/SellDesk.vue'

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
  ],
})

export default router