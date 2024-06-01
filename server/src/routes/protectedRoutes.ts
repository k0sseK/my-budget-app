import { Router, Request, Response } from 'express'
import { authenticateToken } from '../middlewares/authMiddleware'

const router = Router()

router.get('/authenticateToken', authenticateToken, (req: Request, res: Response) => {
    res.json({ message: 'You have accessed a protected route', user: (req as any).user })
})

export default router
