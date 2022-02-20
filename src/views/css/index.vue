<template>
  <div>css1</div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods: {
    flat() {
      const arr = [1, [2, [3, [4, 5]]], 6];
      // 方法1，使用flat(),flat()只能拉平数组一层，Infinity可展开任意深层的嵌套数组
      const arr1 = arr.flat(Infinity);
      console.log(arr1);
      //方法2，使用reduce() array.reduce(function(accumulator, currentValue, currentIndex, array), initialValue)
      const flatten = arr => {
        return arr.reduce((pre, cur) => {
          return pre.concat(Array.isArray(cur) ? flatten(cur) : cur);
        }, []);
      };
      const arr2 = flatten(arr);
      console.log(arr2);
      //方法3
      const newArr = [];
      const fn = arr => {
        for(let i = 0; i < arr.length; i++) {
          if(Array.isArray(arr[i])) {
            fn(arr[i]);
          } else {
            newArr.push(arr[i]);
          }
        }
      };
      console.log(fn());
      //方法4 toString & split 因为split分割后形成的数组的每一项值为字符串，所以需要用一个map方法遍历数组将其每一项转换为数值型
      function flatten4(arr) {
        return arr.toString().split(',').map(function(item) {
            return Number(item);
        });
      }
      //方法5 some + ...,  some() 方法用于检测数组中的元素是否满足指定条件（函数提供）
      function flatten5(arr) {
      while(arr.some(item=>Array.isArray(item))) {
          arr = [].concat(...arr);
      }
      return arr;
}

    },
    unquie() {
      const arr = [1, 1, '1', 17, true, true, false, false, 'true', 'a', {}, {}];
      // => [1, '1', 17, true, false, 'true', 'a', {}, {}]
      //方法一：利用Set
      const res1 = Array.from(new Set(arr));
      //方法二：两层for循环+splice
      const unique1 = arr => {
        let len = arr.length;
        for (let i = 0; i < len; i++) {
          for (let j = i + 1; j < len; j++) {
            if (arr[i] === arr[j]) {
              arr.splice(j, 1);
              // 每删除一个树，j--保证j的值经过自加后不变。同时，len--，减少循环次数提升性能
              len--;
              j--;
            }
          }
        }
        return arr;
      };
      //方法三：利用indexOf
      const unique2 = arr => {
        const res = [];
        for (let i = 0; i < arr.length; i++) {
          if (res.indexOf(arr[i]) === -1) res.push(arr[i]);
        }
        return res;
      };
      //当然也可以用include、filter，思路大同小异。
      //方法四：利用include
      const unique3 = arr => {
        const res = [];
        for (let i = 0; i < arr.length; i++) {
          if (!res.includes(arr[i])) res.push(arr[i]);
        }
        return res;
      };
      //方法五：利用filter
      const unique4 = arr => {
        return arr.filter((item, index) => {
          return arr.indexOf(item) === index;
        });
      };
      //方法六：利用Map
      const unique5 = arr => {
        const map = new Map();
        const res = [];
        for (let i = 0; i < arr.length; i++) {
          if (!map.has(arr[i])) {
            map.set(arr[i], true);
            res.push(arr[i]);
          }
        }
        return res;
      };
    }
  }
};
</script>