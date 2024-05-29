import { RowDataPacket, FieldPacket } from 'mysql2'
import { db } from '../config'

export interface User {
    id?: number
    username: string
    email: string
    password: string
}

interface QueryResult {
    fieldCount: number
    affectedRows: number
    insertId: number
    info: string
    serverStatus: number
    warningStatus: number
    changedRows: number
}

export const createUser = async (user: User) => {
    const [rows] = await db.query(
        'INSERT INTO users (username, email, password) VALUES (?, ?, ?)',
        [user.username, user.email, user.password]
    )
    return rows
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
