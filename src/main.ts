import { createApp } from 'vue'
import App from './App.vue'
import { createPinia } from 'pinia'
import '../src/styles/variables.css'
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import router from './router/Index'
const app = createApp(App)
app.use(createPinia())
app.use(router)

app.mount('#app')
