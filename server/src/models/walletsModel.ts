import { RowDataPacket } from 'mysql2'
import { db } from '../config'

export interface Wallet {
    id?: number
    user_id?: number
    name: string
    balance: string
    currency: string
}

export const createWallet = async (wallet: Wallet) => {
    const balance = parseFloat(wallet.balance.replace(',', '.'))

    const [rows] = await db.query(
        'INSERT INTO wallets (user_id, name, balance, currency) VALUES (?, ?, ?, ?)',
        [wallet.user_id, wallet.name, balance, wallet.currency]
    )

    return {
        id: (rows as any).insertId,
        ...wallet
    }
}

export const findUserWallets = async (user: any) => {
    const [wallets] = await db.execute<RowDataPacket[]>(
        'SELECT id, name, balance, currency FROM wallets WHERE user_id = ?',
        [user.id]
    )
    console.log(wallets)
    if (wallets.length > 0) {
        return wallets
    }

    return null
}
