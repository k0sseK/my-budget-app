import { Router } from 'express'
import { add } from '../controllers/walletsController'

const router = Router()

router.post('/add', add)

export default router
