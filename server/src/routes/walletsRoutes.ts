import { Router } from 'express'
import { add, getUserWallets } from '../controllers/walletsController'

const router = Router()

router.post('/add', add)
router.get('/getUserWallets', getUserWallets)

export default router
