import TableHeader from '../TableHeader/TableHeader'
import TableRow from '../TableRow/TableRow'
import { v4 as uuid4 } from 'uuid'
import { StyledTable } from './StyledTable'

const Table = ({ currencies }) => {
    return (
        <StyledTable>
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
        </StyledTable>
    )
}

export default Table