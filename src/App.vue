<template>
	<div>
		<HelloWorld />
	</div>
</template>

<script setup>
// import { Suspense } from 'vue'
import HelloWorld from './components/HelloWorld.vue'
// const packages = [{ package: 'lowcode-material-ant-vue', version: '0.1.1', library: 'LowcodeMaterialAntVue', urls: ['http://10.13.4.153:9000/lowcode-resource/lowcode-material-ant-vue_v0.1.1/index.css', 'http://10.13.4.153:9000/lowcode-resource/lowcode-material-ant-vue_v0.1.1/index.js'] }]
// const projectSchema = ProjectSchema

</script>

<script>
import ProjectSchema from './assets/schema.json'

export default {
  name: 'App',
  components: {
    // Suspense,
		HelloWorld,
  },
}
</script>

<style>
</style>
