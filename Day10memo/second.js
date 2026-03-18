import React, { useState,useMemo,useRef } from "react";
import ReactDOM, { createRoot } from "react-dom/client"

// function App(){
//     const [count,setCount] =useState(0);
//     const money=useRef(0);
//     return(
//         <>
//         <h1>Counter is:  {count}</h1>
//         <button onClick={()=>setCount(count+1)}>Increment</button>

//         <h1>Money is: {money}</h1>
//         <button onClick={()=>money.current=money.current+1}>Increment</button>
//         </>
//     )
// }


function StopWatch(){

    const [time,setTime]=useState(0);

    function start(){
        setInterval(() => {
            setTime((e)=>e+1);   /// call back function gets the (prevTime)=>prevTime+1;
        }, 1000);
    }
    function stop(){
        
    }
    function reset(){

    }
    return (
        <>
        <h1>StopWatch is:   {time}</h1>
        <button onClick={start}>Start</button><br></br>
        <br></br>
        <button onclick={stop}>Stop</button><br></br>
        <br></br>
        <button onclick={reset}>Reset</button>
        </>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<StopWatch/>)