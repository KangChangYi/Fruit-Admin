import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'login',
            component: () => import('../views/login/login.vue'),
        },
        {
            path: '/index',
            name: 'index',
            component: () => import('../views/index/index.vue'),
            redirect: 'commodityManage',
            children: [
                {
                    path: '/commodityManage',
                    name: 'commodityManage',
                    component: () => import('../views/index/components/commodity/commodityManage.vue'),
                }, {
                    path: '/commodityAdd',
                    name: 'commodityAdd',
                    component: () => import('../views/index/components/commodity/commodityAdd.vue'),
                }, {
                    path: '/order',
                    name: 'order',
                    component: () => import('../views/index/components/order/order.vue'),
                }, {
                    path: '/users',
                    name: 'users',
                    component: () => import('../views/index/components/users/users.vue'),
                },
            ],
        },
    ],
});
