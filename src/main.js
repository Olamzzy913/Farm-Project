import './assets/base.css'
import './assets/main.css'
import './assets/marquee.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'
import VeeValidatePlugin from './include/validation'
import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'
import '../node_modules/nprogress/nprogress.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(VeeValidatePlugin)
app.use(Toast)

app.mount('#app')
