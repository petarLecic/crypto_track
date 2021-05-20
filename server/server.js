import express from 'express'
import cors from 'cors'
import axios from 'axios'
import dotenv from 'dotenv'
dotenv.config()

const BASE_URL = 'https://pro-api.coinmarketcap.com'
const LISTING_LATEST = '/v1/cryptocurrency/listings/latest'
const SINGLE_CURR = '/v1/cryptocurrency/info'

const server = express()
server.use(cors())


server.get('/', (req, res) => {
    axios.get(`${BASE_URL}${LISTING_LATEST}`, {headers: {'X-CMC_PRO_API_KEY': process.env.API_KEY}})
        .then(result => res.json(result.data.data))
})

server.get('/:currency', (req, res) => {
    let symbol = req.query.symbol
    axios.get(`${BASE_URL}${SINGLE_CURR}?symbol=${symbol}`, {headers: {'X-CMC_PRO_API_KEY': process.env.API_KEY}})
        .then(result => res.json(result.data.data))
})

const PORT = 3006
server.listen(PORT, () => console.log(`Server is running at: ${PORT}`))