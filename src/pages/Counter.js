import { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const increment = () => setCounter(prevCounter => prevCounter + 1)
    const decrement = () => setCounter(prevCounter => prevCounter - 1)
    return (
        <div>
            <div>{counter}</div>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decrement</button>
            <button onClick={()=>setCounter(0)}>Reset</button>
        </div>
    )
}

export default Counter