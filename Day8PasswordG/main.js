import React,{useEffect,useState} from "react";
import ReactDOM from "react-dom/client"



function PasswordGenerator(){

    const [Password, setPassword]= useState("DSFSFRER");
    const [length,setLength]=useState(10);


    return(
        <>
        <div>
            <h1>Password is:{Password}</h1>

            <input type="range" min={5} max={15}></input>
            <label>Length is:{length}</label>

            <input type="checkbox"></input>
            <label>Number</label>

            <input type="checkbox"></input>
            <label>Character</label>
        </div>
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<PasswordGenerator/>);