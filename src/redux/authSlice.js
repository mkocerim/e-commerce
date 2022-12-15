import { createSlice } from "@reduxjs/toolkit";

const initialState={

    //TODO token bilgisini localStorage dan al 
    //FIXME 
    token:null
}

export const authSlice=createSlice({
    name: 'authSlice',
    initialState,
    reducers:{
    
    // TODO burayı birazdan olustur

    }
})