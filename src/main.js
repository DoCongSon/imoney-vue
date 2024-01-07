import { createApp } from 'vue';
import './style.scss';
import App from './App.vue';
import router from './router';
import registerLayout from './layouts/register';

const app = createApp(App);
app.use(router);

registerLayout(app);

app.mount('#app');
