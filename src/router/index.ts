import { createRouter, createWebHistory } from 'vue-router';

import type { RouteRecordRaw } from 'vue-router';
//引入路由类型

import { asideList } from '../assets/asideList';

//路由数组
const routes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: () => import('../view/home/index.vue'),
    //元参数
    meta: {
      name: 'home',
    },
    //单独路由守卫
    // beforeEnter: (to, from) => {
    //   console.log(`来自${to.path},去${from.path}`);
    // },
  },
];

asideList.map((item) => {
  let tempRoute: RouteRecordRaw;
  if (item.children) {
    item.children.map((child: { path: any; label: any }) => {
      let temPath = new URL(
        `/src/view/components${child.path}.vue`,
        window.location.href
      );
      tempRoute = {
        path: child.path,
        name: child.label,
        component: () => import(/* @vite-ignore */ temPath.href),
      };
      routes.push(tempRoute);
    });
  }
});
/* @vite-ignore */
//屏蔽警告
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
