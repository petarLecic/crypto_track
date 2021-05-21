import axios from "axios"
import { useEffect, useState } from "react"
import { useParams } from "react-router"
import Loading from "../Loading/Loading"

const Single = () => {
    let symbol = useParams()
    const [currency, setCurrency] = useState()

    useEffect(() => {
        axios.get(`http://localhost:3006/currency`, {params: symbol})
            .then(res => {
                setCurrency(res.data[symbol.symbol])
                console.log(res.data[symbol.symbol])
            })
    }, [symbol])

    return currency ?
        <div>
            <img src={currency.logo} alt="logo" />
            <h1>{currency.name}</h1>
            <p>{currency.description}</p>
        </div>
        :
        <Loading/>
}

export default Single