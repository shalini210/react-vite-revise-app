import { configureStore } from "@reduxjs/toolkit";
import CounterReducer from "./Counterslice"
import UserReducer from "./Userslice"
export const   store = configureStore({
    reducer:{
        counter:CounterReducer,
        user:UserReducer
    }
})