// import axios from 'axios'
import { useState, useEffect } from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from "react-router-dom"
import Loading from './components/Loading/Loading'
import Single from './components/Single/Single';
import Table from './components/Table/Table';

function App() {
    const [currencies, setCurrencies] = useState([])

    useEffect(() => {
        // getCurrencies()
        // const apiInterval = setInterval(() => getCurrencies(), 60000)

        // return () => clearInterval(apiInterval)

        const loader = setTimeout(() => {
            const sortedCurrencies = resData.sort((a, b) => b.quote.USD.price - a.quote.USD.price)
            setCurrencies(sortedCurrencies.slice(0, 50))
        }, 2000)

        return () => clearTimeout(loader)
    }, [])

    // function getCurrencies() {
    //     axios.get('http://localhost:3006').then(res => {
    //         const sortedCurrencies = res.data.sort((a, b) => b.quote.USD.price - a.quote.USD.price)
    //         setCurrencies(sortedCurrencies.slice(0, 50))
    //         console.log('api refreshed')
    //     })
    // }
    
    return currencies.length > 0 ?
        <Router>
            <Switch>
                <Route exact path="/">
                    <Table currencies={currencies}/>
                </Route>
                <Route path="/currency/:symbol">
                    <Single/>
                </Route>
            </Switch>
        </Router>
        :
        <Loading/>
}

export default App;


// Remove resData array at the end
const resData = [
    {
        "id": 1,
        "name": "Bitcoin",
        "symbol": "BTC",
        "slug": "bitcoin",
        "num_market_pairs": 9556,
        "date_added": "2013-04-28T00:00:00.000Z",
        "tags": [
            "mineable",
            "pow",
            "sha-256",
            "store-of-value",
            "state-channels",
            "coinbase-ventures-portfolio",
            "three-arrows-capital-portfolio",
            "polychain-capital-portfolio",
            "binance-labs-portfolio",
            "arrington-xrp-capital",
            "blockchain-capital-portfolio",
            "boostvc-portfolio",
            "cms-holdings-portfolio",
            "dcg-portfolio",
            "dragonfly-capital-portfolio",
            "electric-capital-portfolio",
            "fabric-ventures-portfolio",
            "framework-ventures",
            "galaxy-digital-portfolio",
            "huobi-capital",
            "alameda-research-portfolio",
            "a16z-portfolio",
            "1confirmation-portfolio",
            "winklevoss-capital",
            "usv-portfolio",
            "placeholder-ventures-portfolio",
            "pantera-capital-portfolio",
            "multicoin-capital-portfolio",
            "paradigm-xzy-screener"
        ],
        "max_supply": 21000000,
        "circulating_supply": 18713700,
        "total_supply": 18713700,
        "platform": null,
        "cmc_rank": 1,
        "last_updated": "2021-05-20T13:38:02.000Z",
        "quote": {
            "USD": {
                "price": 41719.986822626466,
                "volume_24h": 111348529794.83885,
                "percent_change_1h": -0.05983758,
                "percent_change_24h": 18.64932583,
                "percent_change_7d": -17.19985473,
                "percent_change_30d": -25.67677787,
                "percent_change_60d": -27.2090441,
                "percent_change_90d": -20.85185739,
                "market_cap": 780735317402.5848,
                "last_updated": "2021-05-20T13:38:02.000Z"
            }
        }
    },
    {
        "id": 1027,
        "name": "Ethereum",
        "symbol": "ETH",
        "slug": "ethereum",
        "num_market_pairs": 5909,
        "date_added": "2015-08-07T00:00:00.000Z",
        "tags": [
            "mineable",
            "pow",
            "smart-contracts",
            "ethereum",
            "coinbase-ventures-portfolio",
            "three-arrows-capital-portfolio",
            "polychain-capital-portfolio",
            "binance-labs-portfolio",
            "arrington-xrp-capital",
            "blockchain-capital-portfolio",
            "boostvc-portfolio",
            "cms-holdings-portfolio",
            "dcg-portfolio",
            "dragonfly-capital-portfolio",
            "electric-capital-portfolio",
            "fabric-ventures-portfolio",
            "framework-ventures",
            "hashkey-capital-portfolio",
            "kinetic-capital",
            "huobi-capital",
            "alameda-research-portfolio",
            "a16z-portfolio",
            "1confirmation-portfolio",
            "winklevoss-capital",
            "usv-portfolio",
            "placeholder-ventures-portfolio",
            "pantera-capital-portfolio",
            "multicoin-capital-portfolio",
            "paradigm-xzy-screener"
        ],
        "max_supply": null,
        "circulating_supply": 115951040.9365,
        "total_supply": 115951040.9365,
        "platform": null,
        "cmc_rank": 2,
        "last_updated": "2021-05-20T13:38:02.000Z",
        "quote": {
            "USD": {
                "price": 2888.687058102387,
                "volume_24h": 83071774905.87495,
                "percent_change_1h": 1.0087964,
                "percent_change_24h": 16.0276023,
                "percent_change_7d": -24.69150673,
                "percent_change_30d": 30.86484032,
                "percent_change_60d": 61.34173581,
                "percent_change_90d": 49.75653336,
                "market_cap": 334946271326.7676,
                "last_updated": "2021-05-20T13:38:02.000Z"
            }
        }
    },
    {
        "id": 1839,
        "name": "Binance Coin",
        "symbol": "BNB",
        "slug": "binance-coin",
        "num_market_pairs": 598,
        "date_added": "2017-07-25T00:00:00.000Z",
        "tags": [
            "marketplace",
            "centralized-exchange",
            "payments",
            "binance-smart-chain",
            "alameda-research-portfolio",
            "multicoin-capital-portfolio"
        ],
        "max_supply": 170532785,
        "circulating_supply": 153432897,
        "total_supply": 169432897,
        "platform": null,
        "cmc_rank": 3,
        "last_updated": "2021-05-20T13:37:08.000Z",
        "quote": {
            "USD": {
                "price": 404.02650786301155,
                "volume_24h": 9180809365.843262,
                "percent_change_1h": 3.87444808,
                "percent_change_24h": 13.89494921,
                "percent_change_7d": -33.07393983,
                "percent_change_30d": -24.82216111,
                "percent_change_60d": 53.03454982,
                "percent_change_90d": 41.31073765,
                "market_cap": 61990957566.21514,
                "last_updated": "2021-05-20T13:37:08.000Z"
            }
        }
    },
    {
        "id": 2010,
        "name": "Cardano",
        "symbol": "ADA",
        "slug": "cardano",
        "num_market_pairs": 263,
        "date_added": "2017-10-01T00:00:00.000Z",
        "tags": [
            "mineable",
            "dpos",
            "pos",
            "platform",
            "research",
            "smart-contracts",
            "staking",
            "binance-chain"
        ],
        "max_supply": 45000000000,
        "circulating_supply": 31948309440.7478,
        "total_supply": 45000000000,
        "platform": null,
        "cmc_rank": 4,
        "last_updated": "2021-05-20T13:37:09.000Z",
        "quote": {
            "USD": {
                "price": 1.82886487072157,
                "volume_24h": 15440835944.27281,
                "percent_change_1h": -2.68450402,
                "percent_change_24h": 20.93122264,
                "percent_change_7d": 0.38489576,
                "percent_change_30d": 51.05358608,
                "percent_change_60d": 51.96141757,
                "percent_change_90d": 97.43746414,
                "market_cap": 58429140815.12594,
                "last_updated": "2021-05-20T13:37:09.000Z"
            }
        }
    },
    {
        "id": 825,
        "name": "Tether",
        "symbol": "USDT",
        "slug": "tether",
        "num_market_pairs": 12955,
        "date_added": "2015-02-25T00:00:00.000Z",
        "tags": [
            "store-of-value",
            "payments",
            "stablecoin",
            "stablecoin-asset-backed",
            "solana-ecosystem"
        ],
        "max_supply": null,
        "circulating_supply": 58019510515.37168,
        "total_supply": 60476291004.32977,
        "platform": {
            "id": 1027,
            "name": "Ethereum",
            "symbol": "ETH",
            "slug": "ethereum",
            "token_address": "0xdac17f958d2ee523a2206206994597c13d831ec7"
        },
        "cmc_rank": 5,
        "last_updated": "2021-05-20T13:37:08.000Z",
        "quote": {
            "USD": {
                "price": 1.00198241306068,
                "volume_24h": 257127413808.14005,
                "percent_change_1h": 0.04569768,
                "percent_change_24h": 0.0100449,
                "percent_change_7d": 0.19831526,
                "percent_change_30d": 0.19192395,
                "percent_change_60d": 0.19578794,
                "percent_change_90d": 0.18274508,
                "market_cap": 58134529150.79162,
                "last_updated": "2021-05-20T13:37:08.000Z"
            }
        }
    }
]