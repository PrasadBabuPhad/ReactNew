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
    const intervalRef=useRef(null);

    function start(){
        intervalRef.current=setInterval(() => {
            setTime((e)=>e+1);   /// call back function gets the (prevTime)=>prevTime+1;
        }, 1000);
    }
    function stop(){
        clearInterval(intervalRef.current);
        intervalRef.current=null;
    }
    function reset(){
        clearInterval(intervalRef.current);
        intervalRef.current=null;
        setTime(0)
    }
    return (
        <>
        <h1>StopWatch is:   {time}</h1>
        <button onClick={start}>Start</button><br></br>
        <br></br>
        <button onClick={stop}>Stop</button><br></br>
        <br></br>
        <button onClick={reset}>Reset</button>
        </>
    )
}
ReactDOM.createRoot(document.getElementById('root')).render(<StopWatch/>)