import TableHeader from '../TableHeader/TableHeader'
import TableRow from '../TableRow/TableRow'
import { v4 as uuid4 } from 'uuid'

const Table = ({ currencies }) => {
    return (
        <table>
            <thead>
                <TableHeader/>
            </thead>
            <tbody>
                {
                    currencies.map(currency => {
                        return (
                            <TableRow 
                                key={uuid4()}
                                name={currency.name} 
                                symbol={currency.symbol} 
                                price={currency.quote.USD.price} 
                                percent={currency.quote.USD.percent_change_24h}
                            />
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Table