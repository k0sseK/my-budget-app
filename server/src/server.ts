import express from 'express'
import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'

import authRoutes from './routes/authRoutes'
import walletsRoutes from './routes/walletsRoutes'
import plaidRoutes from './routes/plaidRoutes'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(
    cors({
        origin: 'http://localhost:5173',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
        credentials: true
    })
)

app.use(bodyParser.json())

app.use('/api/auth', authRoutes)
app.use('/api/wallets', walletsRoutes)
app.use('/api/plaid', plaidRoutes)

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
})
