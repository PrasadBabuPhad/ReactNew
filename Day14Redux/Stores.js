import {configureStore} from "@reduxjs/toolkit"
import slice1Reducer from "./Slicer1"

const store =configureStore({
    reducer:{
        slice1:slice1Reducer,
        // slice2:slice2Reducer,
        // slice3:slice3Reducer,
        
    }
})

export default store;