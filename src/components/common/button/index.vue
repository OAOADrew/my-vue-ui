<template>
  <button :disabled="disabled" :class="['mu_button', disabledClass, typeClass, sizeClass ]">
    <span>
      <slot />
    </span>
  </button>
</template>

<script>

export default {
  name: 'MuButton',
  props: {
    // 按钮的类型
    type: {
      type: String,
      default: 'default'
    },
    // 按钮的尺寸
    size: {
      type: String,
      default: 'normal'
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      typeList: {
        default: 'mbtn_default',
        primary: 'mbtn_primary',
        success: 'mbtn_success',
        warning: 'mbtn_warning',
        text: 'mbtn_text'
      },
      sizeList: {
        normal: 'mbtn_size_normal',
        large: 'mbtn_size_large',
        small: 'mbtn_size_small',
        mini: 'mbtn_size_mini'
      }
    };
  },
  computed: {
    typeClass() {
      return this.typeList[this.type] || 'mbtn_default';
    },
    sizeClass() {
      return this.sizeList[this.size] || 'mbtn_size_normal';
    },
    disabledClass() {
      return this.disabled ? 'mbtn_disabled' : '';
    }
  }
};
</script>

<style lang="scss">
@import 'style.scss'
</style>
