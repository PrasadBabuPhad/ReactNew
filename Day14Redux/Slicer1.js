import { createSlice } from "@reduxjs/toolkit";

const reactslicer=createSlice({
    name:"slice1",
    initialState:{count:0},
    reducers:{
        Increment:(e)=>{e.count=e.count+1},
        Decrement:(e)=>{e.count=e.count-1},
        Reset:(e)=>{e.count=0} 
    }
})


export const {Increment,Decrement,Reset}=reactslicer.actions

export default reactslicer.reducer;