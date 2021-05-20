import { useState } from "react"


const Amount = ({ name, price }) => {
    const [amount, setAmount] = useState(localStorage.getItem(name) ? localStorage.getItem(name) : 0)
    const [inputValue, setInputValue] = useState('')

    return (
        <>
            <td>
                <input type='number' value={inputValue ? inputValue : ''} onChange={e => setInputValue(e.target.value)}/>
                <button>Submit</button>
            </td>
            <td>$ {(amount * price).toFixed(2)}</td>
        </>
    )
}

export default Amount