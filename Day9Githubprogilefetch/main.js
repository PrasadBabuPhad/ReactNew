import React, {useCallback ,useEffect,useState} from "react";
import ReactDOM from "react-dom/client"
import Header from "./Header"
import Body from "./Body"



function GithubProfile(){
    //Header 
    //Body 10 cards 
    return(
    <>
        <Header></Header>
        <Body></Body>
    </>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<GithubProfile/>);