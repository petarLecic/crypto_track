// import axios from "axios"
// import { useEffect, useState } from "react"
// import { useParams } from "react-router"
import Loading from "../Loading/Loading"

const Single = () => {
    // let symbol = useParams()
    // const [currency, setCurrency] = useState()

    // useEffect(() => {
    //     axios.get(`http://localhost:3006/currency`, {params: symbol})
    //         .then(res => {
    //             setCurrency(res.data[symbol.symbol])
    //         })
    // }, [symbol])

    function formatDate(string) {
        const dateObj = new Date(string)
        const d = dateObj.getDate()
        const m = dateObj.getMonth()
        const y = dateObj.getFullYear()
        return  `${d}.${m}.${y}.`
    }

    function formatUrls(obj) {
        let urls = []
        for (let key in obj) {
            if (obj[key].length > 0) {
                let el = {key: key, value: obj[key]}
                urls.push(el)
            }
        }
        return urls
    }

    return currency ?
        <div>
            <img src={currency.logo} alt="logo" />
            <h1>{currency.name}({currency.symbol})</h1>
            <p>{currency.description}</p>
            {currency.category ? 
                <p><b>Category:</b> {currency.category}</p> : null
            }
            {currency.date_added ? 
                <p><b>Date added:</b> {formatDate(currency.date_added)}</p> : null
            }
            {currency.notice ? 
                <p><b>Notice:</b> {currency.notice}</p> : null
            }
            {currency.platform ? 
                <p><b>Platform:</b> {currency.platform.name}</p> : null
            }
            {currency.slug ? 
                <p><b>Slug:</b> {currency.slug}</p> : null
            }
            {currency.subreddit ? 
                <p><b>Subreddit:</b> {currency.subreddit}</p> : null
            }
            {currency.tags ? 
                <p><b>Tags:</b> {currency.tags.join(', ')}</p> : null
            }
            {currency["tag-names"] ? 
                <p><b>Tag names:</b> {currency["tag-names"].join(', ')}</p> : null
            }
            {currency.twitter_username ? 
                <p><b>Twitter username:</b> {currency.twitter_username}</p> : null
            }
            {
                formatUrls(currency.urls).map((el, i) => {
                    return (
                        <div key={i}>
                            <h1>{el.key}:</h1>
                            <ul>
                                {
                                    el.value.map((el, i) => {
                                        return (
                                            <li key={i}>
                                                <a href={el} target="_blank" rel="noreferrer">{el}</a>
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </div>
                    )
                })
            }
        </div>
        :
        <Loading/>
}

export default Single

const currency = {
    "id": 1,
    "name": "Bitcoin",
    "symbol": "BTC",
    "category": "coin",
    "description": "Bitcoin (BTC) is a cryptocurrency . Users are able to generate BTC through the process of mining. Bitcoin has a current supply of 18,713,700. The last known price of Bitcoin is 40,338.21383786 USD and is up 2.10 over the last 24 hours. It is currently trading on 9585 active market(s) with $73,303,024,019.30 traded over the last 24 hours. More information can be found at https://bitcoin.org/.",
    "slug": "bitcoin",
    "logo": "https://s2.coinmarketcap.com/static/img/coins/64x64/1.png",
    "subreddit": "bitcoin",
    "notice": "",
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
    "tag-names": [
        "Mineable",
        "PoW",
        "SHA-256",
        "Store of Value",
        "State channels",
        "Coinbase Ventures Portfolio",
        "Three Arrows Capital Portfolio",
        "Polychain Capital Portfolio",
        "Binance Labs Portfolio",
        "Arrington XRP capital",
        "Blockchain Capital Portfolio",
        "BoostVC Portfolio",
        "CMS Holdings Portfolio",
        "DCG Portfolio",
        "DragonFly Capital Portfolio",
        "Electric Capital Portfolio",
        "Fabric Ventures Portfolio",
        "Framework Ventures",
        "Galaxy Digital Portfolio",
        "Huobi Capital",
        "Alameda Research Portfolio",
        "A16Z Portfolio",
        "1Confirmation Portfolio",
        "Winklevoss Capital",
        "USV Portfolio",
        "Placeholder Ventures Portfolio",
        "Pantera Capital Portfolio",
        "Multicoin Capital Portfolio",
        "Paradigm XZY Screener"
    ],
    "tag-groups": [
        "OTHER",
        "CONSENSUS_ALGORITHM",
        "CONSENSUS_ALGORITHM",
        "PROPERTY",
        "PROPERTY",
        "PROPERTY",
        "PROPERTY",
        "PROPERTY",
        "PROPERTY",
        "PROPERTY",
        "PROPERTY",
        "PROPERTY",
        "PROPERTY",
        "PROPERTY",
        "PROPERTY",
        "PROPERTY",
        "PROPERTY",
        "PROPERTY",
        "PROPERTY",
        "PROPERTY",
        "PROPERTY",
        "PROPERTY",
        "PROPERTY",
        "PROPERTY",
        "PROPERTY",
        "PROPERTY",
        "PROPERTY",
        "PROPERTY",
        "PROPERTY"
    ],
    "urls": {
        "website": [
            "https://bitcoin.org/"
        ],
        "twitter": [],
        "message_board": [
            "https://bitcointalk.org"
        ],
        "chat": [],
        "explorer": [
            "https://blockchain.coinmarketcap.com/chain/bitcoin",
            "https://blockchain.info/",
            "https://live.blockcypher.com/btc/",
            "https://blockchair.com/bitcoin",
            "https://explorer.viabtc.com/btc"
        ],
        "reddit": [
            "https://reddit.com/r/bitcoin"
        ],
        "technical_doc": [
            "https://bitcoin.org/bitcoin.pdf"
        ],
        "source_code": [
            "https://github.com/bitcoin/"
        ],
        "announcement": []
    },
    "platform": null,
    "date_added": "2013-04-28T00:00:00.000Z",
    "twitter_username": "",
    "is_hidden": 0
}