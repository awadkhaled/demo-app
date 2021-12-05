import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { ButtonGroup, Button, Alert } from 'react-bootstrap'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const increment = () => setCounter(prevCounter => prevCounter + 1)
    const decrement = () => setCounter(prevCounter => prevCounter - 1)
    return (
        <div>
            <Alert className="text-center">{counter}</Alert>
            <div className="text-center">
                <ButtonGroup>
                    <Button onClick={increment}>Increment</Button>
                    <Button onClick={decrement}>Decrement</Button>
                    <Button onClick={() => setCounter(0)}>Reset</Button>
                </ButtonGroup>
            </div>
        </div>
    )
}

export default Counter