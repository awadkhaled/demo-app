import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Button } from 'react-bootstrap'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const increment = () => setCounter(prevCounter => prevCounter + 1)
    const decrement = () => setCounter(prevCounter => prevCounter - 1)
    return (
        <div>
            <div>{counter}</div>
            <Button onClick={increment}>Increment</Button>
            <Button onClick={decrement}>Decrement</Button>
            <Button onClick={()=>setCounter(0)}>Reset</Button>
        </div>
    )
}

export default Counter