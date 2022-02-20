import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/views/layout'

Vue.use(Router);

const router = new Router({
  base: process.env.BASE_URL,
  mode: 'history',
  routes: [
    {
      path: '',
      component: Layout,
      redirect: '/javascript',
      children: [
        {
          name: 'javascript',
          path: 'javascript',
          component: () => import('@/views/javascript/index')
        },
        {
          name: 'css',
          path: 'css',
          component: () => import('@/views/css/index')
        }
      ]
    }
  ]
});


export default router;
