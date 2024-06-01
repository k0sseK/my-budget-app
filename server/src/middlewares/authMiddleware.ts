// import { Request, Response, NextFunction } from 'express'
// import jwt from 'jsonwebtoken'
// import { secretKey } from '../config'

// interface CustomRequest extends Request {
//     userId?: string
// }

// export const authenticateToken = (req: Request, res: Response, next: NextFunction) => {
//     const token = req.header('Authorization')?.split(' ')[1]

//     if (!token) {
//         return res.status(401).json({ message: 'Access denied' })
//     }

//     try {
//         const verified = jwt.verify(token, secretKey)
//         req.user = verified
//         next()
//     } catch (error) {
//         res.status(400).json({ message: 'Invalid token' })
//     }
// }
import { Request, Response, NextFunction } from 'express'
import jwt from 'jsonwebtoken'
import { secretKey } from '../config'

interface CustomRequest extends Request {
    user?: string | object
}

export const authenticateToken = (req: CustomRequest, res: Response, next: NextFunction) => {
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
