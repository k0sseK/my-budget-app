import { Router } from 'express'
import { createLinkToken, exchangePublicToken } from '../controllers/plaidController'
import { authMiddleware } from '../middlewares/authMiddleware'

const router = Router()

router.post('/create_link_token', authMiddleware, createLinkToken)
router.post('/exchange_public_token', authMiddleware, exchangePublicToken)

export default router
