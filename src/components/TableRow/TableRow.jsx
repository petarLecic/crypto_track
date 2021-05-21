import Amount from "../Amount/Amount"
import { Link } from 'react-router-dom'
import { StyledTableRow } from './StyledTableRow'
import styled from "styled-components"

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

const StyledPercent = styled.td`
    color: ${props => {
        if (props.percent < 0) return 'rgb(240, 0, 0)'
        if (props.percent > 0) return 'rgb(3, 185, 42)'
        else return
    }};
    text-shadow: 1px 0.5px black;
    /* font-weight: bold; */
`

export default TableRow