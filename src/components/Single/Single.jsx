import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Loading from "../Loading/Loading"
import { StyledSingle } from './StyledSingle'

const Single = () => {
    const symbol = useParams()
    const [currency, setCurrency] = useState()

    useEffect(() => {
        axios.get(`http://localhost:3006/currency`, {params: symbol})
            .then(res => {
                setCurrency(res.data[symbol.symbol])
            })
    }, [symbol])

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
        <StyledSingle>
            <img src={currency.logo} alt="logo" />
            <h1>{currency.name}({currency.symbol})</h1>
            <p>{currency.description}</p>
            {currency.category ? 
                <p><b>Category:</b>{currency.category}</p> : null
            }
            {currency.date_added ? 
                <p><b>Date added:</b>{formatDate(currency.date_added)}</p> : null
            }
            {currency.notice ? 
                <p><b>Notice:</b>{currency.notice}</p> : null
            }
            {currency.platform ? 
                <p><b>Platform:</b>{currency.platform.name}</p> : null
            }
            {currency.slug ? 
                <p><b>Slug:</b>{currency.slug}</p> : null
            }
            {currency.subreddit ? 
                <p><b>Subreddit:</b>{currency.subreddit}</p> : null
            }
            {currency.tags ? 
                <p><b>Tags:</b>{currency.tags.join(', ')}</p> : null
            }
            {currency["tag-names"] ? 
                <p><b>Tag names:</b>{currency["tag-names"].join(', ')}</p> : null
            }
            {currency.twitter_username ? 
                <p><b>Twitter username:</b>{currency.twitter_username}</p> : null
            }
            {
                formatUrls(currency.urls).map((el, i) => {
                    return (
                        <div key={i}>
                            <h1 className="urls-heading">{el.key}:</h1>
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
        </StyledSingle>
        :
        <Loading/>
}

export default Single