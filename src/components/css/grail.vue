<template>
  <div class="body">
    <div id="header">#header</div>
    <div id="container" class="column">
      <div id="center" >#center</div>

    </div>
    <div id="left" class="column">#left</div>
    <div id="right" class="column">#right</div>
    <div id="footer">#footer</div>
  </div>
  <!-- <div class="layout">
    <layout-aside />
    <main class="layout_body">
      <router-view />
    </main>
  </div> -->
</template>

<script>
// import LayoutAside from './components/aside.vue'
export default {
  // components: { LayoutAside },
  data() {
    return {

      target: {}

    };
  },
  created() {
  // function throttle(fn, delay) {
  //   let last = 0 // 上次触发时间
  //   return (...args) => {
  //     const now = Date.now()
  //     if (now - last > delay) {
  //       last = now
  //       fn.apply(this, args)
  //     }
  //   }
  // }
  function throttle(fn, delay) {
    //上次触发的时间
    let flag = true;
    return function(...args) {
      if(!flag) return;
      flag = false;
      // const args = arguments;
      setTimeout(() => {
        fn.apply(this, args);
        flag = true;
      }, delay);
    };
  }
  function task() {
    console.log('节流了!!!!');
  }
  const throttleTask = throttle(task, 2000);
  window.addEventListener('scroll', throttleTask);
  // // 测试
  // function task() {
  //   console.log('run task')
  // }
  // const throttleTask = throttle(task, 1000)
  // window.addEventListener('scroll', throttleTask)
    // var source = {
    //   field1: 1,
    //   field2: undefined,
    //   field3: 'ConardLi',
    //   field4: {
    //     child: 'child',
    //     child2: {
    //         child2: 'child2'
    //     }
    //   },
    //   field5: [2,4,8]
    // };
    // console.log('target', this.cloneShallow(source));
    // function debounce(fn, delay) {
    //   let timer;
    //   return function(...args) {
    //     if (timer) {
    //       clearTimeout(timer);
    //     }
    //     timer = setTimeout(() => {
    //       fn.apply(this, args);
    //     }, delay)
    //   }
    // }
    // //测试
    // function task() {
    //   console.log('run task');
    // }
    // const debounceTask = debounce(task, 1000);
    // window.addEventListener('scroll', debounceTask);

  },
  methods: {
    cloneShallow(source, map = new WeakMap()) {
      if( typeof source === Object) {
        let cloneTarget = source.isArray(source) ? [] : {};

        if( map.get(source) ) {
          return map.get(source);
        }
        map.set(source, cloneTarget);
        for(var key in source) {
          cloneTarget[key] = this.cloneShallow(source[key], map);
        }
        return cloneTarget;
      } else {
        return source;
      }
    }
  }
};
</script>

<style lang="scss">
.body {
  min-width: 450px;
  font-size: 20px;
  #header, #footer {
    height: 100px;
    line-height: 100px;
    background-color: rgb(202, 192, 192);
  }
  #header{

  }
  #footer {
    clear: both;
  }
  #container {
    width: 100%;
  }
  .column {
      float: left;
      text-align: center;
      height: 100px;
      line-height: 100px;
    }

  #left {
    margin-left: -100%;
    // right: 200px;
    width: 200px;
    background-color: red;
  }
  #center {
    margin-right: 150px;
    margin-left: 200px;
    background-color: blue;
  }
  #right {
    margin-left: -150px;
    // right: -150px;
    width: 150px;
    background-color: red;
  }
}
</style>
