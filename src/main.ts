import { createApp } from 'vue'
import i18n from './config/i18n'
import './assets/style.css'
import App from './App.vue'

createApp(App).use(i18n).mount('#app')
