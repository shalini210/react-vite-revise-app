import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./Counterslice"
export const   store = configureStore({
    reducer:{
        counter:CounterReducer
    }
})