import React from "react"
import ReactDOM from 'react-dom/client'

function Counter(){
    let count=0;

    
    return (
        <div className="first">
            <h1>Count is:{count}</h1>
            <button onClick={incrementnumber}>Increment</button>
            <button>Decrement</button>
        </div>
        
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<Counter/>)