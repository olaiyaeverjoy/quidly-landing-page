import { createApp } from 'vue'
import { createPinia } from 'pinia'

import './assets/style.css'
import './assets/font.css'

import App from './App.vue'
import router from './router/index'

import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

import '@fortawesome/fontawesome-free/css/all.css'
import { initializeApiClient } from '@/services/api/api.service'

// KEYCLOAK
import { initializeKeycloak } from '@/services/keycloak/keycloak.service'

import AOS from 'aos'
import 'aos/dist/aos.css'

initializeApiClient()
const app = createApp(App)
const pinia = createPinia()

app.use(pinia)
app.use(router)
app.use(Toast)

app.mount('#app')

AOS.init({
  duration: 800,
  once: true,
})