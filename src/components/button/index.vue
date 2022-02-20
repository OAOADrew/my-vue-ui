<template>
  <button :class="['mu_button', type]">
    <slot />
  </button>
</template>

<script>

export default {
  name: 'MuButton',
  props: {
    type: {
      type: String,
      default: 'default'
    }
  }
};
</script>

<style lang="scss">
.mu_button {
  padding: 5px 15px;
  border-radius: 5px;
  font-size: 20px;
  color: rgb(54, 54, 54);
  border: 1px solid #eee;
}
.default {
  background-color: #fff;
}
.primary {
  background-color: rgb(149, 245, 94)
}
</style>
