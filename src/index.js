import LowCodePreview from './component/LowCodeSchemaComp.vue';
import * as vue from 'vue/dist/vue.cjs'
import VueRenderer from '@knxcloud/lowcode-vue-renderer';

const install = (App) => {
	if (typeof window !== 'undefined' && !window.Vue) {
		window.Vue = vue
	}
	window.LCVueRenderer = VueRenderer;
	App.component(LowCodePreview.name, LowCodePreview);
}

// let windowObj = window;
// /* 支持使用标签的方式引入 */
// if (typeof windowObj !== 'undefined' && windowObj.Vue) {
// 	const vm = windowObj.Vue.createApp({});
// 	install(vm);
// }

export default install;
