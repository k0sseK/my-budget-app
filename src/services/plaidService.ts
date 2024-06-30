/* eslint-disable no-useless-catch */
import axios from 'axios'

const API_URL = 'http://localhost:3000/api/plaid'

export const createLinkToken = async () => {
    const token = localStorage.getItem('token')
    const response = await axios.post(
        `${API_URL}/create_link_token`,
        {},
        {
            headers: { Authorization: `Bearer ${token}` }
        }
    )
    return response.data
}

export const exchangePublicToken = async (public_token: string) => {
    const token = localStorage.getItem('token')
    const response = await axios.post(
        `${API_URL}/exchange_public_token`,
        { public_token },
        {
            headers: { Authorization: `Bearer ${token}` }
        }
    )
    return response.data
}
