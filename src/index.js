// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { createApp } from 'vue';
import App from './App.vue';
import LowCodePreview from './components/index';

const app = createApp(App);
app.use(LowCodePreview);
app.mount('#app');
