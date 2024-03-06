# Lowcode Vue Schema Component

KNXCloud/lowcode-engine-vue 的 schema 预览组件

## Install

```
npm install lowcode-vue-schema-component --save
```

## Usage

### 入口文件 index.js

```js
import { createApp } from 'vue';
import App from './App.vue';
import LowcodeVueSchemaComponent from 'lowcode-vue-schema-component';

const app = createApp(App);
app.use(LowcodeVueSchemaComponent); // 注册组件
app.mount('#app');
```

### 使用

```js
<template>
	<Suspense>
		<LowCodePreview :packages="packages" :pageSchema="pageSchema" />
	</Suspense>
</template>

<script setup>
import { Suspense } from 'vue'
const packages = [...] // 依据alibaba/lowcode-engine规定的package协议文本
const pageSchema = {...} // 依据alibaba/lowcode-engine规定的schema协议文本

</script>

<script>
export default {
  name: 'App',
  components: {
    Suspense, // 因为LowcodeVueSchemaComponent是异步组件，所以需要使用Suspense包裹
  },
}
</script>

<style>
</style>

```

### 参考文档

#### alibaba/lowcode-engine:

alibaba/lowcode-engine 阿里开源的一个低代码引擎

[package 协议](https://lowcode-engine.cn/site/docs/specs/assets-spec#22-packages-a)

[schema 协议](https://lowcode-engine.cn/site/docs/specs/lowcode-spec#2-%E5%8D%8F%E8%AE%AE%E7%BB%93%E6%9E%84)

#### KNXCloud/lowcode-engine-vue

KNXCloud/lowcode-engine-vue 基于阿里 lowcode-engine 定制的 vue 版本

[马上玩一下](https://lowcode-engine.cn/demo/demo-general/index.htmlhttps://knxcloud.github.io/lowcode-engine-demo/)

## Authors

<div style="display: flex; align-items: center">
<img src="https://avatars.githubusercontent.com/u/36907441?v=4" alt="dragon0311" width="40" height="40" style="border-radius: 50%; margin-right: 8px">
<a style="font-weight: bold;" src="https://github.com/dragon0311">
dragon0311</a>

</div>

## License

For open source projects, say how it is licensed.
