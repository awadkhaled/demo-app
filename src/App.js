import './css/App.css'
import Counter from './pages/Counter'
import Navigationbar from './components/organisms/Navigationbar'
import Home from './pages/Home'
import LoginPage from './pages/LoginPage'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <Router>
        <Navigationbar/>
        <Container>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/login'>
              <LoginPage />
            </Route>
            <Route path='/counter'>
              <Counter />
            </Route>
          </Switch>
        </Container>
    </Router>
  )
}

export default App