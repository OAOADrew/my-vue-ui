<template>
  <div class="layout_aside">
    <div v-for="router in routerList" :key="router.id" class="layout_aside_item">
      <div @click="handleRouter(router)">
        {{ router.value }}
        <span>
          {{ router.name }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LayoutAside',
  data() {
    return {
      routerList: [
        {id: 1, name: '按钮', value: 'Button', path: '/button'},
        {id: 2, name: '单行文本', value: 'Input', path: '/input'}
      ]
    };
  },
  methods: {
    handleRouter(val) {
      const currentPath = window.location.pathname;
      if(currentPath === val.path) return;
      this.$router.push(val.path);
    }
  }
};
</script>

<style lang="scss">
@import './../style.scss';
</style>
