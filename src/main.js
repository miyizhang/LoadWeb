import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

process.env.__VUE_PROD_HYDRATION_MISMATCH_DETAILS__ = true;

const app = createApp(App);
app.use(router);
app.mount('#app');
