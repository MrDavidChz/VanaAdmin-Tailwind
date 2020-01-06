export default [
    {
        path: '/',
        name: 'dashboard',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
    },
    {
        path: '/home',
        name: 'home',
        component: () => import(/* webpackChunkName: "home" */ '../views/Home.vue')
    }
]