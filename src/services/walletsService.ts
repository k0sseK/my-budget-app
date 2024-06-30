/* eslint-disable no-useless-catch */
import axios from 'axios'

const API_URL = 'http://localhost:3000/api/wallets'

export const addWallet = async (name: string, balance: string, currency: string) => {
    try {
        const token = localStorage.getItem('token')
        const response = await axios.post(
            `${API_URL}/add`,
            {
                name,
                balance,
                currency
            },
            {
                headers: { Authorization: `Bearer ${token}` }
            }
        )

        return response.data
    } catch (error) {
        throw error
    }
}

export const getUserWallets = async () => {
    try {
        const token = localStorage.getItem('token')
        const response = await axios.get(`${API_URL}/getUserWallets`, {
            headers: { Authorization: `Bearer ${token}` }
        })

        return response.data
    } catch (error) {
        throw error
    }
}
