/* eslint-disable no-useless-catch */
import axios from 'axios'

const API_URL = 'http://localhost:3000/api'

export const authenticateToken = async () => {
    try {
        const token = localStorage.getItem('token')
        const response = await axios.get(`${API_URL}/authenticateToken`, {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })

        return response.data
    } catch (error) {
        throw error
    }
}
