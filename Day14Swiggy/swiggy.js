import Header from "./Header.js"
import Card from "./Card.js"
import React from "react";
import ReactDOM from "react-dom/client"
import {Provider} from "react-redux"
import stores from "./stored.js"

function App(){
    return(
        <Provider store={stores}>
            <Header></Header>
            <Card></Card>
        </Provider>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);