<template>
  <Suspense>
    <LowCodePreview />
  </Suspense>
</template>

<script>
import { Suspense } from 'vue'
export default {
  name: 'App',
  components: {
    Suspense,
  },
}
</script>

<style>
#app {
  margin-top: 60px;
  color: #2c3e50;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
