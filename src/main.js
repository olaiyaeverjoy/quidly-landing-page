import { createApp } from 'vue'
import './style.css'
import './assets/font.css'
import App from './App.vue'
import router from './router';
import '@fortawesome/fontawesome-free/css/all.css'

const app = createApp(App)

app.use(router);
app.mount('#app');
