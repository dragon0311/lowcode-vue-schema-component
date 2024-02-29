// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import { createApp } from 'vue';
import App from './App.vue';
import LowCodePreview from 'lowcode-vue-schema-component'

const app = createApp(App);
app.use(LowCodePreview)
app.mount('#app');
