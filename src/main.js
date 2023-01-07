import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import QrReader from 'vue3-qrcode-reader'



const app = createApp(App)
app.use(QrReader)
app.use(router)

app.mount('#app')
