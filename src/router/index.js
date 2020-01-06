import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

/* Layouts */
import AppLayout from '../views/layouts/AppLayout';
import GuestLayout from '../views/layouts/GuestLayout';

/* Router Modules */
import appRoutes from './app';
import guestRoutes from './guest';

export const routes = [
    {
        path: '/',
        component: GuestLayout,
        children: [
            ...guestRoutes,
        ]
    },
    {
        path: '/',
        component: AppLayout,
        children: [
            ...appRoutes,
        ]
    },
    {
        path: '*',
        beforeEnter: (to, from, next) => {
            next({ name: 'error404', replace: true, query: { 'ref': to.fullPath, 'refFrom': from.fullPath } })
        }
    }
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


router.beforeEach((to, from, next) => {
    const toFullPath = to.fullPath
    const toPath = to.path

    if(toPath === '/') {
        next({ name: 'home', replace: true })
    } else {
        next()
    }
})

export default router
