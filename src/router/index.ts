import { createRouter, createWebHistory } from 'vue-router'
import { authenticateToken } from '../services/protectedService'

import Welcome from '@/views/Welcome.vue'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'Welcome',
            meta: { verifyAuth: true },
            component: Welcome
        },
        {
            path: '/home',
            name: 'Home',
            meta: { verifyAuth: true },
            component: () => import('@/views/Home.vue')
        }
    ]
})

router.beforeEach(async (to, from, next) => {
    const verifyAuth = to.matched.some((record) => record.meta.verifyAuth)

    const isAuthenticated = async () => {
        try {
            await authenticateToken()
            return true
        } catch (error) {
            return false
        }
    }

    if (verifyAuth) {
        if (await isAuthenticated()) {
            to.path === '/' ? next('/home') : next()
        } else {
            to.path === '/' ? next() : next('/')
        }
    } else {
        next()
    }
})

export default router
