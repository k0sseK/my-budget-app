import { Router } from 'express'
import { add, getUserWallets } from '../controllers/walletsController'
import { authMiddleware } from '../middlewares/authMiddleware'

const router = Router()

router.post('/add', authMiddleware, add)
router.get('/getUserWallets', authMiddleware, getUserWallets)

export default router
