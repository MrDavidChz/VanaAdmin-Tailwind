export default [
    {
        path: '/pages/login',
        name: 'pageLogin',
        component: () => import(/* webpackChunkName: "pages/login" */ '../views/pages/Login.vue')
    },
    {
        path: '/pages/reset-password',
        name: 'pageResetPassword',
        component: () => import(/* webpackChunkName: "pages/reset-password" */ '../views/pages/ResetPassword.vue')
    },
    {
        path: '/pages/register',
        name: 'pageRegister',
        component: () => import(/* webpackChunkName: "pages/register" */ '../views/pages/Register.vue')
    },
    {
        path: '/pages/404',
        name: 'pageError404',
        component: () => import(/* webpackChunkName: "pages/404" */ '../views/pages/404.vue')
    }
]