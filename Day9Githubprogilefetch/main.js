import React, {useCallback ,useEffect,useState} from "react";
import ReactDOM from "react-dom/client"
import header from "./Header"
import body from "./Body"



function GithubProfile(){
    //Header 
    //Body 10 cards 
    return(
    <>
        <header></header>
        <body></body>
    </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<GithubProfile/>);