import { useState } from "react";

import { addItems, removeItems } from "./slice";
import { useDispatch } from "react-redux";


export default function FoodCart({value}){


    const [inCart,setInCart] = useState(false);
    const dispatch =useDispatch();
    
    
    
        function handleClick(){
            if(inCart){
                setInCart(false);
                dispatch(removeItems(value));
            }
            else{
                setInCart(true);
                dispatch(addItems(value));
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