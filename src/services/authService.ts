/* eslint-disable no-useless-catch */
import axios from 'axios'

const API_URL = 'http://localhost:3000/api/auth'

export const register = async (username: string, email: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/register`, {
            username,
            email,
            password
        })
        return response.data
    } catch (error) {
        throw error
    }
}

export const login = async (username: string, password: string) => {
    try {
        const response = await axios.post(`${API_URL}/login`, {
            username,
            password
        })

        return response.data
    } catch (error) {
        throw error
    }
}

export const logout = () => {
    localStorage.removeItem('token')
}
