import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/views/layout';

Vue.use(Router);

const router = new Router({
  base: process.env.BASE_URL,
  mode: 'history',
  routes: [
    {
      path: '',
      component: Layout,
      redirect: '/button',
      children: [
        {
          name: 'button',
          path: 'button',
          component: () => import('@/components/common/button')
        }
      ]
    }
  ]
});


export default router;
