import { useState } from "react"
import { StyledForm } from './StyledForm'


const Amount = ({ name, price }) => {
    const [amount, setAmount] = useState(localStorage.getItem(name) || 0)
    const [inputValue, setInputValue] = useState(Number(localStorage.getItem(name)) || '')

    const regex = /^[+]?([0-9]+(?:[.][0-9]*)?|\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/

    function submitAmount(e) {
        e.preventDefault()
        if (regex.test(inputValue)) {
            localStorage.setItem(name, inputValue)
            setAmount(inputValue)
        }
    }

    return (
        <>
            <td>
                <StyledForm onSubmit={e => submitAmount(e)}>
                    <input type='number' className="input-number" step="0.001" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
                    <input type='submit' className="input-submit" disabled={inputValue === ''}/>
                </StyledForm>
            </td>
            <td>$ {(amount * price).toFixed(2)}</td>
        </>
    )
}

export default Amount