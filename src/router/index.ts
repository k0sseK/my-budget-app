import { createRouter, createWebHistory } from 'vue-router'
import { authenticateToken } from '../services/protectedService'

import Welcome from '@/views/WelcomeView.vue'

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
            path: '/summary',
            name: 'Summary',
            meta: { verifyAuth: true },
            component: () => import('@/views/SummaryView.vue')
        },
        {
            path: '/transactions',
            name: 'Transactions',
            meta: { verifyAuth: true },
            component: () => import('@/views/TransactionsView.vue')
        },
        {
            path: '/wallets',
            name: 'Wallets',
            meta: { verifyAuth: true },
            component: () => import('@/views/WalletsView.vue')
        },
        {
            path: '/:pathMatch(.*)*',
            name: 'NotFound',
            component: () => import('@/views/NotFoundView.vue')
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
            to.path === '/' ? next('/summary') : next()
        } else {
            to.path === '/' ? next() : next('/')
        }
    } else {
        next()
    }
})

export default router
