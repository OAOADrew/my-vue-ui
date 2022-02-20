<template>
  <div>
    <div v-for="js in javascriptList" :key="js.id">
      <div>{{ js.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      javascriptList: [
        { id: 1, name: '数组去重', path: '/unique' },
        { id: 2, name: '扁平化', path: '/flat' },
        { id: 3, name: '防抖', path: '/debounce' },
        { id: 4, name: '节流', path: '/throttle' }
      ]
    }
  }
}
</script>

