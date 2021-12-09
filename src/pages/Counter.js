import CounterTemplate from '../templates/Counter'
import { useState } from 'react'

const Counter = () => {
    const [counter, setCounter] = useState(0)
    const increment = () => setCounter(prevCounter => prevCounter + 1)
    const decrement = () => setCounter(prevCounter => prevCounter - 1)
    const reset = () => setCounter(0)
    return (
        <CounterTemplate counter={counter} increment={increment} decrement={decrement} reset={ reset}/>
    )
}

export default Counter