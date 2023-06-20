import { createApp } from 'vue';
import App from './App.vue';
import './global.scss';
import router from './router';
import { createPinia } from 'pinia';

const app = createApp(App);

app.use(createPinia());
app.use(router).mount('#app');
