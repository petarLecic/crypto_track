import { useEffect, useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Single from './components/Single/Single';
import Table from './components/Table/Table';
import { StyledApp } from './StyledApp'

function App() {
    const [ownedCurrencies, setOwnedCurrencies] = useState([])
    const [ownedValue, setOwnedValue] = useState(0)

    useEffect(() => {
        let currencies = []
        let sum = 0

        for (let i = 0; i < localStorage.length; i++) {
            let key = localStorage.key(i)
            let obj = JSON.parse(localStorage.getItem(key))
            currencies.push({name: key, amount: obj.amount})
            sum += obj.amount * obj.price
        }
        setOwnedCurrencies(currencies)
        setOwnedValue(sum)
    }, [])

    return (
        <StyledApp>
            <h1 className="main-heading">Crypto Track</h1>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Table ownedCurrencies={ownedCurrencies} ownedValue={ownedValue}/>
                    </Route>
                    <Route path="/currency/:symbol">
                        <Single/>
                    </Route>
                </Switch>
            </Router>
        </StyledApp>
    )
}

export default App;