import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { secretKey } from '../config'

interface CustomRequest extends Request {
    user?: string | object
}

export const verifyToken = (req: CustomRequest, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.split(' ')[1]

    if (!token) {
        return res.status(401).json({ message: 'Access denied' })
    }

    try {
        const verified = jwt.verify(token, secretKey)
        req.user = verified
        next()
    } catch (error) {
        res.status(400).json({ message: 'Invalid token' })
    }
}

export const authMiddleware = (req: CustomRequest, res: Response, next: NextFunction) => {
    const token = req.header('Authorization')?.split(' ')[1]

    if (!token) {
        return res.status(401).json({ message: 'Unauthorized' })
    }

    try {
        const decoded = jwt.verify(token, secretKey) as { uuid: string }
        req.user = { uuid: decoded.uuid }
        next()
    } catch (error) {
        return res.status(401).json({ message: 'Invalid token' })
    }
}
