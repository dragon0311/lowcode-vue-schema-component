<template>
	<Suspense>
		<LowCodePreview :packages="packages" :pageSchema="pageSchema" />
	</Suspense>
</template>

<script setup>
import { Suspense } from 'vue/dist/vue.esm-browser'
const packages = [{ package: 'lowcode-material-ant-vue', version: '0.1.1', library: 'LowcodeMaterialAntVue', urls: ['http://10.13.4.153:9000/lowcode-resource/lowcode-material-ant-vue_v0.1.1/index.css', 'http://10.13.4.153:9000/lowcode-resource/lowcode-material-ant-vue_v0.1.1/index.js'] }]
const pageSchema = PageSchema

</script>

<script>
import PageSchema from './assets/schema.json'

export default {
  name: 'App',
  components: {
    Suspense,
  },
}
</script>

<style>
</style>
