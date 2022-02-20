import Vue from 'vue';
import App from './App.vue';
import router from './router';
import VueRouter from 'vue-router';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import '@/style/index.scss';
import MyUI from '@/components/index.js';

Vue.use(MyUI);
Vue.use(ElementUI);
Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app');
