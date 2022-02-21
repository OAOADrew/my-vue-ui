<template>
  <div class="layout_container">
    <layout-aside />
    <main class="layout_center">
      <router-view />
    </main>
  </div>
</template>

<script>
import LayoutAside from './components/aside.vue';

export default {
  components: { LayoutAside },
  data() {
    return {
    };
  },
  created() {

  },
  methods: {

  }
};
</script>

<style lang="scss">
.body {
  min-width: 450px;
  padding: 30px;
  .mu_button {
    margin: 0 20px;
  }
}
</style>
