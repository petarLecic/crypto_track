import { useState } from "react"
import { StyledForm } from './StyledForm'

const Amount = ({ name, price }) => {
    const [inputValue, setInputValue] = useState(() => {
                                            let localStorageObj = JSON.parse(localStorage.getItem(name))
                                            return Number(localStorageObj?.amount) || ''
                                        })

    const regex = /^[+]?([0-9]+(?:[.][0-9]*)?|\.[0-9]+)(?:[eE][+-]?[0-9]+)?$/

    function submitAmount(e) {
        e.preventDefault()
        if (regex.test(inputValue)) {
            localStorage.setItem(name, JSON.stringify({amount: inputValue, price: price}))
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
            <td>$ {(inputValue * price).toFixed(2)}</td>
        </>
    )
}

export default Amount