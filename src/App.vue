<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {

  },
  methods: {
    distinct(arr) {
      for(let i = 0, len = arr.length; i < len; i++ ) {
        for(let j = i+1; j <= len; j++) {
          if(arr[i] === arr[j]) {
            arr.splice(j, 1);
            // splice会改变原数组的长度，所以要将数组的长度len和下标j-1
            len--;
            j--;
          }
          return arr;
        }
      }
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  height: 100%;
}
</style>
