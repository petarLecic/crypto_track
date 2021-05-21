import Amount from "../Amount/Amount"
import { Link } from 'react-router-dom'
import { StyledTableRow } from './StyledTableRow'
import { StyledPercent } from './StyledPercent'

const TableRow = ({ isHeader, name, symbol, price, percent }) => {
    return isHeader ?
        <StyledTableRow isHeader>
            <td>Name</td>
            <td>Short name</td>
            <td>$ Value</td>
            <td>last 24h</td>
            <td>Amount you own</td>
            <td>$ value of your coins</td>
        </StyledTableRow>
        :
        <StyledTableRow>
            <td>
                <Link to={`/currency/${symbol}`}>{name}</Link>
            </td>
            <td>{symbol}</td>
            <td>$ {price.toFixed(2)}</td>
            <StyledPercent percent={percent}>{percent.toFixed(2)} %</StyledPercent>
            <Amount name={name} price={price}/>
        </StyledTableRow>
}

export default TableRow