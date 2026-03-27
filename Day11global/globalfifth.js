import GlobalContext from "./Global"
import { useContext } from "react"

export default function Fifth(){

    const data=useContext(GlobalContext);
    return(
        <>
        mai ho don {data}
        </>
    )
}