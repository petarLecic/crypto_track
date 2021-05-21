import TableRow from '../TableRow/TableRow'
import Loading from '../Loading/Loading'
import Pagination from '../Pagination/Pagination'
import { StyledTable } from './StyledTable'
import { useState, useEffect } from 'react'
import axios from 'axios'

const Table = () => {
    const [allCurrencies, setAllCurrencies] = useState([])
    const [currentPage, setCurrentPage] = useState(1)
    const [perPage] = useState(10)

    useEffect(() => {
        getCurrencies()
        // const apiInterval = setInterval(() => getCurrencies(), 60000)

        // return () => clearInterval(apiInterval)
    }, [])

    function getCurrencies() {
        axios.get('http://localhost:3006').then(res => {
            const sortedCurrencies = res.data.sort((a, b) => b.quote.USD.price - a.quote.USD.price)
            setAllCurrencies(sortedCurrencies.slice(0, 50))
        })
    }

    const lastCurrency = currentPage * perPage
    const firstCurrency = lastCurrency - perPage
    const currencies = allCurrencies.slice(firstCurrency, lastCurrency)

    return allCurrencies.length > 0 ? 
        <>
            <StyledTable>
                <thead>
                    <TableRow isHeader/>
                </thead>
                <tbody>
                    {
                        currencies.map(currency => {
                            return (
                                <TableRow 
                                    key={currency.id}
                                    name={currency.name} 
                                    symbol={currency.symbol} 
                                    price={currency.quote.USD.price} 
                                    percent={currency.quote.USD.percent_change_24h}
                                />
                            )
                        })
                    }
                </tbody>
            </StyledTable>
            <Pagination currAmount={allCurrencies.length} perPage={perPage} setCurrentPage={setCurrentPage}/>
        </>
        :
        <Loading/>
}

export default Table