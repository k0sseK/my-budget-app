import { Request, Response } from 'express'
import { Configuration, PlaidApi, PlaidEnvironments, Products, CountryCode } from 'plaid'

interface CustomRequest extends Request {
    user?: {
        uuid: string
    }
}

const configuration = new Configuration({
    basePath: PlaidEnvironments[process.env.PLAID_ENV as keyof typeof PlaidEnvironments],
    baseOptions: {
        headers: {
            'PLAID-CLIENT-ID': process.env.PLAID_CLIENT_ID!,
            'PLAID-SECRET': process.env.PLAID_SECRET!,
            'Plaid-Version': '2020-09-14'
        }
    }
})
const client = new PlaidApi(configuration)

export const createLinkToken = async (req: CustomRequest, res: Response) => {
    try {
        const uuid = req.user?.uuid ?? ''
        console.log(uuid, 'uuid')
        const response = await client.linkTokenCreate({
            user: {
                client_user_id: uuid
            },
            client_name: 'My Budget App',
            products: [Products.Auth, Products.Transactions],
            country_codes: [CountryCode.Us],
            language: 'en'
        })
        console.log(response.data, 'res')
        res.json(response.data)
    } catch (error) {
        console.error(error)
        res.status(500).send('Something went wrong')
    }
}

export const exchangePublicToken = async (req: Request, res: Response) => {
    const { public_token } = req.body
    try {
        const response = await client.itemPublicTokenExchange({ public_token })
        res.json(response.data)
    } catch (error) {
        console.error(error)
        res.status(500).send('Something went wrong')
    }
}
