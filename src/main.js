import { createApp } from 'vue'
import './style.css'
import './assets/font.css'
import App from './App.vue'
import router from './router';

import Toast from 'vue-toastification';
import 'vue-toastification/dist/index.css';

import '@fortawesome/fontawesome-free/css/all.css'
import AOS from 'aos'
import 'aos/dist/aos.css'



const app = createApp(App)

app.use(router);
app.use(Toast);
app.mount('#app');
AOS.init({
  duration: 800,
  once: true
})