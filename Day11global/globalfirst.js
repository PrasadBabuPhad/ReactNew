import {useContext, useState} from "react"
import React,{useState} from "react";
import GlobalContext from "./Global"


function App(){

    const [count,setCount]=useState(10);
    console.log(GlobalContext);
    return(<>
        <GlobalContext.Provider value={{count,setCount}}></GlobalContext.Provider>
        <Fifth></Fifth>
    </>
    )

}