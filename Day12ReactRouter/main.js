import React from "react";
import ReactDOM from "react-dom/client"
import { BrowserRouter,Routes,Route, Link} from "react-router";
import Home from "./src/Home";
import DashBoard from "./src/DashBoard";
import Contact from "./src/Contact";
import Details from "./src/Details";
import Zero from "./src/Zero";
import Hello from "./src/Hello"

function App(){

    return(
        <BrowserRouter>

        <nav>
            <Link to="/">Home</Link>
            <Link to="/Contact">Contact</Link>
            <Link to="/DashBoard">DashBoard</Link>
            <Link to="/Hello">Hello</Link>
            <Link to="/Details">Details</Link>
        </nav>


        <Routes>
            <Route path="/" element={<Home></Home>}></Route>
            <Route path="/Dashboard" element={<DashBoard></DashBoard>}></Route>
            <Route path="/Contact" element={<Contact></Contact>}></Route>
            <Route path="/Details" element={<Details></Details>}></Route>
            <Route index element={<Zero></Zero>}></Route>

            <Route path="Hello" element ={<Hello></Hello>}></Route>
            <Route path="Zero" element={<Zero></Zero>}></Route>
        </Routes>
        </BrowserRouter>
    )
}


ReactDOM.createRoot(document.getElementById('root')).render(<App></App>);