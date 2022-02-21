<template>
  <div>
    <div class="body">
      <mu-button size="large" disabled> 默认按钮 </mu-button>
      <mu-button> 默认按钮 </mu-button>
      <mu-button size="small"> 默认按钮 </mu-button>
      <mu-button size="mini"> 默认按钮 </mu-button>
    </div>
    <div class="body">
      <mu-button type="primary" size="large" disabled> 主要按钮 </mu-button>
      <mu-button type="primary"> 主要按钮 </mu-button>
      <mu-button type="primary" size="small" > 主要按钮 </mu-button>
      <mu-button type="primary" size="mini"> 主要按钮 </mu-button>
    </div>
    <div class="body">
      <mu-button type="success" size="large" disabled> 成功按钮 </mu-button>
      <mu-button type="success"> 成功按钮 </mu-button>
      <mu-button type="success" size="small"> 成功按钮 </mu-button>
      <mu-button type="success" size="mini"> 成功按钮 </mu-button>
    </div>
    <div class="body">
      <mu-button type="warning" size="large" disabled> 警告按钮 </mu-button>
      <mu-button type="warning"> 警告按钮 </mu-button>
      <mu-button type="warning" size="small"> 警告按钮 </mu-button>
      <mu-button type="warning" size="mini"> 警告按钮 </mu-button>
    </div>
    <div class="body">
      <mu-button type="text" size="large" disabled> 文字按钮 </mu-button>
      <mu-button type="text"> 文字按钮 </mu-button>
      <mu-button type="text" size="small"> 文字按钮 </mu-button>
      <mu-button type="text" size="mini"> 文字按钮 </mu-button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      target: {}
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
