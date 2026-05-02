import { useState } from "react"

const Counter = () => {
    const[counter,setCounter] = useState(0)
    const handleclick = () => setCounter(counter + 1)

return(
    <div>
        <p>{counter}</p>
        <button onClick={() => handleclick()}>click me!</button>
    </div>
)
}

export default Counter