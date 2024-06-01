import { createRouter, createWebHistory } from 'vue-router'

import Welcome from '@/views/Welcome.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'welcome',
            component: Welcome
        },
        {
            path: '/home',
            name: 'home',
            meta: { requiresAuth: true },
            component: () => import('../views/Home.vue')
        }
    ]
})

router.beforeEach((to, from, next) => {
    const requiresAuth = to.matched.some((record) => record.meta.requiresAuth)
    const token = localStorage.getItem('token')

    if (requiresAuth && !token) {
        next('/')
    } else {
        next()
    }
})

export default router
