import React,{useState} from "react";
import ReactDOM, { createRoot } from "react-dom/client"
import Increment from "./Increment.js"
import Decrement from "./Decrement.js"

function App(){
    
    const [count,setCount]=useState(0);
    return(
        <>
       <h1>Hello Coder Army</h1>
       <Increment counts={count} setCounts={setCount}/>
       <Decrement counts={count} setCounts={setCount}/>
        </>
    )
}



ReactDOM.createRoot(document.getElementById('root')).render(<App/>);