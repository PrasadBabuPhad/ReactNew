import React, { useState,useMemo,useRef } from "react";
import ReactDOM, { createRoot } from "react-dom/client"

function App(){
    const [count,setCount] =useState(0);
    const money=useRef(0);
    return(
        <>
        <h1>Counter is:  {count}</h1>
        <button onClick={()=>setCount(count+1)}>Increment</button>

        <h1>Money is: {money}</h1>
        <button onClick={()=>money.current=money.current+1}>Increment</button>
        </>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(<App/>)