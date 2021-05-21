// import axios from 'axios'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Single from './components/Single/Single';
import Table from './components/Table/Table';
import { StyledApp } from './StyledApp'

function App() {
    return (
        <StyledApp>
            <h1 className="main-heading">Crypto Track</h1>
            <Router>
                <Switch>
                    <Route exact path="/">
                        <Table/>
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