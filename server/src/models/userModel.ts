import { RowDataPacket, FieldPacket } from 'mysql2'
import { db } from '../config'
import { secretKey } from '../config'
import { generateUniqueId } from '../utils/generateUniqueId'
import jwt from 'jsonwebtoken'

export interface User {
    id?: number
    uuid?: string
    username: string
    email: string
    password: string
}

export const createUser = async (user: User) => {
    const newUser = {
        uuid: generateUniqueId(),
        ...user
    }

    console.log(newUser)

    const [existingUsers] = await db.query<RowDataPacket[]>(
        'SELECT username, email FROM users WHERE username = ? OR email = ?',
        [newUser.username, newUser.email]
    )

    if (existingUsers.length > 0) {
        const isUsernameTaken = existingUsers.some((u: any) => u.username === newUser.username)
        const isEmailTaken = existingUsers.some((u: any) => u.email === newUser.email)

        if (isUsernameTaken && isEmailTaken) {
            throw new Error('Username and email are already taken')
        } else if (isUsernameTaken) {
            throw new Error('Username is already taken')
        } else if (isEmailTaken) {
            throw new Error('Email is already taken')
        }
    }

    const [rows] = await db.query(
        'INSERT INTO users (uuid, username, email, password) VALUES (?, ?, ?, ?)',
        [newUser.uuid, newUser.username, newUser.email, newUser.password]
    )

    return {
        id: (rows as any).insertId,
        ...newUser
    }
}

export const findUserByToken = async (token: string): Promise<User | null> => {
    try {
        const decoded = jwt.verify(token, secretKey)
        return decoded as User
    } catch (err: any) {
        console.error('Invalid token:', err.message)
        return null
    }
}

export const findUserByUsername = async (username: string): Promise<User | null> => {
    const [rows]: [RowDataPacket[], FieldPacket[]] = await db.query(
        'SELECT * FROM users WHERE username = ?',
        [username]
    )

    if (rows.length > 0) {
        const user = rows[0] as User
        return user
    }

    return null
}
