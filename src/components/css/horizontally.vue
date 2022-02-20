<template>
  <div class="h_father">
    <span>块级元素水平居中</span>
    <!-- <p>水平居中</p>
    <h1>水平居中</h1>
    <span>span水平居中</span> -->
  </div>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.h_father {
  position: relative;
  span {
    float: left;
    position: absolute;
    width: 200px;
    left: 0;
    right: 0;
    margin: 0 auto;
  }
  // text-align: center;
  // p {
  //   text-align: center;
  // }
  // h1 {
  //   text-align: center;
  // }
  // span {

  // }
}

</style>