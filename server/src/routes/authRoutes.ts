import { Router, Request, Response } from 'express'
import { register, login } from '../controllers/authController'
import { verifyToken } from '../middlewares/authMiddleware'

const router = Router()

router.post('/register', register)
router.post('/login', login)

router.get('/verifyToken', verifyToken, (req: Request, res: Response) => {
    res.json({ message: 'You have accessed a protected route', user: (req as any).user })
})

export default router
