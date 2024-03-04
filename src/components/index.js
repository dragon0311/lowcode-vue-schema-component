import LowCodePreview from './LowCodeSchemaComp.vue';
import * as vue from 'vue/dist/vue.cjs'
// const vue = require('vue/dist/vue.esm-browser');
import VueRenderer from '@knxcloud/lowcode-vue-renderer';

const install = (App) => {
	window.Vue = vue
	window.LCVueRenderer = VueRenderer;
	console.log('window.Vue', window.Vue);
	console.log('window.LCVueRenderer', window.LCVueRenderer);

	App.component(LowCodePreview.name, LowCodePreview);
}

// let windowObj = window;
// /* 支持使用标签的方式引入 */
// if (typeof windowObj !== 'undefined' && windowObj.Vue) {
// 	const vm = windowObj.Vue.createApp({});
// 	install(vm);
// }

export default install;
