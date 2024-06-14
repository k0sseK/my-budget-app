import { Request, Response } from 'express'
import { findUserByToken } from '../models/userModel'
import { createWallet, Wallet } from '../models/walletsModel'

export const add = async (req: Request, res: Response) => {
    const { token, name, balance, currency } = req.body

    const user = await findUserByToken(token)
    if (!user) {
        return res.status(400).json({ message: 'Invalid token' })
    }

    const newWallet: Wallet = {
        user_id: user.id,
        name,
        balance,
        currency
    }

    try {
        await createWallet(newWallet)
        res.status(201)
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
}
