import Amount from "../Amount/Amount"
import { Link } from 'react-router-dom'

const TableRow = ({ isHeader, name, symbol, price, percent }) => {
    return isHeader ?
        <tr>
            <td>Name</td>
            <td>Short name</td>
            <td>$ Value</td>
            <td>last 24h</td>
            <td>Amount you own</td>
            <td>$ value of your coins</td>
        </tr>
        :
        <tr>
            <td>
                <Link to={`/currency/${symbol}`}>{name}</Link>
            </td>
            <td>{symbol}</td>
            <td>$ {price.toFixed(2)}</td>
            <td>{percent.toFixed(2)} %</td>
            <Amount name={name} price={price}/>
        </tr>
}

export default TableRow