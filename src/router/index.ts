import { createRouter, createWebHistory } from 'vue-router';
//引入路由创建及路由访问形式

import type { RouteRecordRaw } from 'vue-router';
//引入路由类型

//路由数组
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: './home',
  },
  {
    path: '/home',
    name: 'home',
    component: () => import('../view/home/index.vue'),
    //元参数
    meta: {
      name: 'home',
    },
    //单独路由守卫
    beforeEnter: (to, from) => {
      console.log(`来自${to.path},去${from.path}`);
    },
  },
  {
    path: '/error',
    name: 'error',
    component: () => import('../view/error/index.vue'),
  },
];

//路由实例
const router = createRouter({
  history: createWebHistory(),
  routes,
});

//路由守卫
router.beforeEach((to, form) => {
  console.log(`来自${to.path},去${form.path}`);
});

export default router;
