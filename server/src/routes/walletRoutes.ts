import { Router } from 'express'
import { add } from '../controllers/walletController'

const router = Router()

router.post('/add', add)

export default router
