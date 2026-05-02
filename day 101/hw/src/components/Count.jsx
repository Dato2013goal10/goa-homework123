import { useState } from "react"

const Count = () => {
    const Co = [counter,setCounter] = useState(0)
    const handleClick1 = () => setCounter + 1    
    const handleClick2 = () => setCounter - 1   
    const handleClick3 = () => setCounter(0)   

    return(
        <div>
            <button onClick={handleClick1}>increase</button>
            <button onClick={handleClick2}>decrease</button>
            <button onClick={handleClick3}>reset</button>
            <p>{counter}</p>
        </div>
    )
}

export default Count