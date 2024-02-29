<template>
	<div>
		HelloWorld!
		<Suspense>
			<LowCodePreview :packages="packages" :projectSchema="projectSchema" />
		</Suspense>
	</div>
</template>

<script>
import { Suspense } from '../../public/js/vue.runtime.global.js'
// import LowCodePreview from 'lowcode-vue-schema-component'
import ProjectSchema from '../assets/schema.json'

console.log('ProjectSchema', ProjectSchema);

export default {
	name: 'HelloWorld',
	components: {
    Suspense,
  },
	data() {
		return {
			packages: [{ package: 'lowcode-material-ant-vue', version: '0.1.1', library: 'LowcodeMaterialAntVue', urls: ['http://10.13.4.153:9000/lowcode-resource/lowcode-material-ant-vue_v0.1.1/index.css', 'http://10.13.4.153:9000/lowcode-resource/lowcode-material-ant-vue_v0.1.1/index.js'] }],
			projectSchema: ProjectSchema
		}
	},
}
</script>

<style>
</style>