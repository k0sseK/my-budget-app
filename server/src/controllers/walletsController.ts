import { Request, Response } from 'express'
import { findUserByToken } from '../models/userModel'
import { Wallet, createWallet, findUserWallets } from '../models/walletsModel'

export const add = async (req: Request, res: Response) => {
    const token = req.header('Authorization')?.split(' ')[1] ?? ''
    const { name, balance, currency } = req.body

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
        const wallet = await createWallet(newWallet)
        res.status(201).json(wallet)
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
}

export const getUserWallets = async (req: Request, res: Response) => {
    const token = req.header('Authorization')?.split(' ')[1] ?? ''

    const user = await findUserByToken(token)
    if (!user) {
        return res.status(400).json({ message: 'Invalid token' })
    }

    try {
        const wallets = await findUserWallets(user)
        res.json(wallets)
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
}
