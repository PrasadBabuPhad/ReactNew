import { Outlet,Link } from "react-router";
export default function Details(){
    return(
        <>

        <nav>
            <Link to="/Details">Details</Link>
            <Link to="Hello">Hello</Link>
            <Link to="Zero">Zero</Link>
        </nav>

        <h1>Details Page is Aborted</h1>
        <Outlet></Outlet>
        </>
        
    )
}