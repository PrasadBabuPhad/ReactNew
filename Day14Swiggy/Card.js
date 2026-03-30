//import { useState } from "react";
import FoodCart from "./FoodCart";
const foodItems=[
    {id:1,food:'Pizza',Price:"200"},
    {id:2,food:'Poha',Price:"30"},
    {id:3,food:'Pasta',Price:"120"},
    {id:4,food:'Pongy',Price:"230"},
    {id:5,food:'Pyaar',Price:"0"},
    {id:6,food:'Panner',Price:"150"},
    {id:7,food:'Poatato grill',Price:"50"},
    {id:8,food:'Smash fries',Price:"50"},
    {id:9,food:'Bottle Groud ',Price:"80"},
    {id:10,food:'Puri Shrikhand',Price:"100"},
];

export default function Card(){

    

    return(
        <div style={{display:"flex",justifyContent:"center",flexWrap:"wrap",gap:"20px"
        }}>
            {foodItems.map((value)=>{
                return(
                    <div key={value.id}>
                        <FoodCart value={value}></FoodCart>
                    </div>
                )
            })}
        </div>
        
    )
}
