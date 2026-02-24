import React,{useEffect,useState} from "react";
import ReactDOM from "react-dom/client"



function PasswordGenerator(){

    const [Password, setPassword]= useState("DSFSFRER");
    const [length,setLength]=useState(10);
    const [numberChanged,setnumberChanged]= useState(false);
    const[charChanged,setcharChanged] =useState(false);


    return(
        <>
        <div className="second">
            <h1>{Password}</h1>

            <input type="range" min={5} max={15} value={length} onChange={(e)=>setLength(e.target.value)}></input>
            <label>Length is:({length})</label>

            <input type="checkbox" defaultChecked={numberChanged} onChange={()=>setnumberChanged(!numberChanged)}></input>
            <label>Number</label>

            <input type="checkbox" defaultChecked={charChanged} onChange={()=>setcharChanged(!charChanged)}></input>
            <label>Character</label>
        </div>
        </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<PasswordGenerator/>);