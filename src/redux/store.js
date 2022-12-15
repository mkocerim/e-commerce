import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";



configureStore({
    reducer :  {
        authState: authSlice

    }
})