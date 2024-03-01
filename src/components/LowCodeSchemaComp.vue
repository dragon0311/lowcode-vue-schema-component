<template>
	<div>
		<Suspense>
			<template #default>
				<VueRenderer
					class="lowcode-plugin-sample-preview-content"
					:schema="data.schema"
					:components="data.components"
				/>
			</template>
			<template #fallback>
				<div class="lowcode-plugin-sample-preview-loading">Loading...</div>
			</template>
		</Suspense>
	</div>
</template>

<script setup>
import VueRenderer from '@knxcloud/lowcode-vue-renderer';
import { buildComponents, AssetLoader, noop } from '@knxcloud/lowcode-utils';
import { h, createApp, toRaw, Suspense, reactive } from 'vue';

window['__VUE_HMR_RUNTIME__'] = {
  reload: noop,
  rerender: noop,
  createRecord: noop,
};

const props = defineProps({
  packages: [],
  projectSchema: {}
})

const data = reactive({
	schema: {},
	components: {}
})

const init = async () => {
  // const packages = JSON.parse(window.localStorage.getItem('packages') || '[]');
  // const projectSchema = JSON.parse(window.localStorage.getItem('projectSchema') || '{}');
  const packages = props.packages
  const projectSchema = props.projectSchema


  console.log('props', props);
  const { componentsMap: componentsMapArray = [], componentsTree = [] } = projectSchema;

  const componentsMap = {};
  componentsMapArray.forEach((component) => {
    componentsMap[component.componentName] = component;
  });

  const libraryMap = {};
  const libraryAsset = [];
  packages.forEach(({ package: _package, library, urls, renderUrls }) => {
    libraryMap[_package] = library;
    if (renderUrls) {
      libraryAsset.push(renderUrls);
    } else if (urls) {
      libraryAsset.push(urls);
    }
  });
  console.log('123libraryAsset', libraryAsset);

  await new AssetLoader().load(libraryAsset);
  const components = await buildComponents(libraryMap, componentsMap);

  return { schema: componentsTree[0], components };
};

  const { schema, components } = await init();
  data.schema = toRaw(schema);
	data.components = toRaw(components);

  console.log('data', data);
  // const app = createApp(() => {
  //   return h('div', { class: 'lowcode-plugin-sample-preview' }, [
  //     h(Suspense, null, {
  //       default: () =>
  //         h(VueRenderer, {
  //           class: 'lowcode-plugin-sample-preview-content',
  //           schema: toRaw(schema),
  //           components: toRaw(components),
  //         }),
  //       fallback: () =>
  //         h('div', { class: 'lowcode-plugin-sample-preview-loading' }, 'loading...'),
  //     }),
  //   ]);
  // });
  // app.mount('#lce-container');

</script>

<script>
export default {
	name: 'LowCodePreview',
	components: {
	  Suspense,
		VueRenderer
	}
}
</script>
<style></style>