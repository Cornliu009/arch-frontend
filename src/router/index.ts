import Vue from 'vue';
import VueRouter, { RouteConfig } from 'vue-router';

Vue.use(VueRouter);

const routes: Array<RouteConfig> = [
    {
        path: '/',
        name: 'Index',
        component: () => import('../views/Index.vue'),
    },
    {
        path: '/login',
        name: 'Login',
        component: () => import('../views/auth/Login.vue'),
    },
    {
        path: '/register',
        name: 'Register',
        component: () => import('../views/auth/Register.vue'),
    },
];

const router = new VueRouter({
    mode: 'history',
    routes,
});

export default router;
