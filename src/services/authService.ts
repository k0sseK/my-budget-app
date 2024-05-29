import axios from 'axios'

const API_URL = 'http://localhost:3000/api/auth'

export const register = (username: string, email: string, password: string) => {
    return axios.post(`${API_URL}/register`, {
        username,
        email,
        password
    })
}

export const login = (username: string, password: string) => {
    return axios.post(`${API_URL}/login`, {
        username,
        password
    })
}
