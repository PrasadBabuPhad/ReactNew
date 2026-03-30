import { useState } from "react";

import { addItems } from "./slice";
import { useDispatch } from "react-redux";


export default function FoodCart({value}){


    const [inCart,setInCart] = useState(false);

    cons
    
    
        function handleClick(){
            if(inCart){
                setInCart(false);
            }
            else{
                setInCart(true);
            }
        }
        return(
            <>
                <h1>{value.food}</h1>
                <h2>₹{value.Price}</h2>
                <button onClick={handleClick}>{inCart?"Remove":"Add"}</button>
            </>
        )

}