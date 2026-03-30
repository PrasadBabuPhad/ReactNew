import { configureStore } from "@reduxjs/toolkit";
import CartReducer from "./slice";

const stores =configureStore({
    reducer:{
        slice:CartReducer
    }
})

export default stores;