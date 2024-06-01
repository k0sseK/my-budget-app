import { Request, Response } from 'express'
import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import { createUser, findUserByUsername, User } from '../models/userModel'
import { secretKey } from '../config'

export const register = async (req: Request, res: Response) => {
    const { username, email, password } = req.body
    const hashedPassword = await bcrypt.hash(password, 10)

    const newUser: User = {
        username,
        email,
        password: hashedPassword
    }

    try {
        await createUser(newUser)
        res.status(201).json({ message: 'User registered successfully' })
    } catch (error: any) {
        res.status(400).json({ message: error.message })
    }
}

export const login = async (req: Request, res: Response) => {
    const { username, password } = req.body

    const user = await findUserByUsername(username)
    if (!user) {
        return res.status(400).json({ message: 'Invalid username' })
    }

    const isMatch = await bcrypt.compare(password, user.password)
    if (!isMatch) {
        return res.status(400).json({ message: 'Invalid password' })
    }

    const token = jwt.sign({ id: user.id, username: user.username }, secretKey, { expiresIn: '1h' })
    res.json({ token })
}
