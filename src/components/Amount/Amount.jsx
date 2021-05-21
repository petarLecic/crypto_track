import { useState } from "react"


const Amount = ({ name, price }) => {
    const [amount, setAmount] = useState(localStorage.getItem(name) ? localStorage.getItem(name) : 0)
    const [inputValue, setInputValue] = useState(+localStorage.getItem(name) ? localStorage.getItem(name) : '')

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
                <form onSubmit={e => submitAmount(e)}>
                    <input type='number' step="0.001" value={inputValue} onChange={e => setInputValue(e.target.value)}/>
                    <input type='submit' disabled={inputValue === ''}/>
                </form>
            </td>
            <td>$ {(amount * price).toFixed(2)}</td>
        </>
    )
}

export default Amount