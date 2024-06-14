import mysql from 'mysql2/promise'

export const db = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'my_budget_app'
})

export const secretKey = '6yUWCxestrJW5kxv2GUb3onuiRniTnXt' // Use a strong secret key for JWT
