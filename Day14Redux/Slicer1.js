import { createSlice } from "@reduxjs/toolkit";

const reactslicer=createSlice({
    name:"slice1",
    initialState:{count:0},
    reducers:{
        Increment:(e)=>{e.count=e.count+1},
        Decrement:(e)=>{e.count=e.count-1},
        Reset:(e)=>{e.count=0},
        CustomIncreaser:(state,action) =>{state.count+=action.payload}
    }
})


export const {Increment,Decrement,Reset,CustomIncreaser}=reactslicer.actions

//actions gets this 
//{type:"slice1/Increment",payload:undefined};

export default reactslicer.reducer;