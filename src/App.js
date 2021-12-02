import './css/App.css'
import Counter from './pages/Counter'
import Navigationbar from './components/Navigationbar'
import Home from './pages/Home'
import Login from './pages/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container } from 'react-bootstrap'

function App() {
  return (
    <Router>
      <Container >
        <Navigationbar/>
        <div>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
            <Route path='/counter'>
              <Counter />
            </Route>
          </Switch>
        </div>
      </Container>
    </Router>
  )
}

export default App