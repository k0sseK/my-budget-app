import axios from 'axios'

const API_URL = 'http://localhost:3000/api/wallet'

export const add = async (name: string, balance: number, currency: string) => {
    try {
        const response = await axios.post(`${API_URL}/add`, {
            name,
            balance,
            currency
        })
        return response.data
    } catch (error) {
        throw error
    }
}
