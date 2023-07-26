import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './routers';
import request from './request/request';
const app = createApp(App);
app.config.globalProperties.$request = request;
createApp(App).use(store).use(router).mount('#app')
