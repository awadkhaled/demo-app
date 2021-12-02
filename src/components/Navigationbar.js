import { Link } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button , Navbar } from 'react-bootstrap'

function Navigationbar() {
    return (
        <Navbar >
            <h2>Navbar</h2>
            <div >
                <Link to='/'><Button>Home</Button></Link>
                <Link to='/login'><Button>Login</Button></Link>
                <Link to='/counter'><Button>Counter</Button></Link>
            </div>
        </Navbar>
    )
}

export default Navigationbar