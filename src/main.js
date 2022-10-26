import { createApp } from 'vue'
import router from './router/router'
import App from './App.vue'
import axios from 'axios'
import message from './utils/Message'
import code from './utils/Code'
import constant from './utils/Constant'
import api from './utils/ApiUrl'
import store from "./store/store"
import interceptors from './utils/Interceptors'

const app = createApp(App);

interceptors(store);

app.config.globalProperties.$axios = axios; 
app.config.globalProperties.$message = message; 
app.config.globalProperties.$code = code; 
app.config.globalProperties.$api = api; 
app.config.globalProperties.$constant = constant; 

app.use(store);
app.use(router);
app.mount('#app');
