import LowCodePreview from './LowCodeSchemaComp.vue';

const component = [LowCodePreview];

const install = (App) => {
	component.forEach((item) => {
		App.component(item.name, item);
	});
};

let windowObj = window;
/* 支持使用标签的方式引入 */
if (typeof windowObj !== 'undefined' && windowObj.Vue) {
	const vm = windowObj.Vue.createApp({});
	install(vm);
}

export default install;
