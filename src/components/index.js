import LowCodePreview from './LowCodeSchemaComp.vue';

const install = (App) => {
	console.log('window.Vue', window.Vue);
	App.component(LowCodePreview.name, LowCodePreview);
};


// let windowObj = window;
// /* 支持使用标签的方式引入 */
// if (typeof windowObj !== 'undefined' && windowObj.Vue) {
// 	const vm = windowObj.Vue.createApp({});
// 	install(vm);
// }

export default install;
