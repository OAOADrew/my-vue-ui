<template>
  <div class="layout_aside">
    <div v-for="router in routerList" :key="router.id" class="layout_aside_item">
      <div @click="handleRouter(router)">{{ router.name }}</div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      routerList: [
        {id: 1, name: 'js', path: '/javascript'},
        {id: 2, name: 'css', path: '/css'}
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
