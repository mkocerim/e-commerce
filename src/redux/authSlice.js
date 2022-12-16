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

    setToken:(state,action)=>{

    },
    removeToken:(state,action)=>{

    },
    
    // TODO burayı birazdan olustur

    }
})


export default authSlice.reducer

export const{setToken,removeToken}= authSlice.actions

//export const {setToken} = authSlice.actions
//export const removeToken= authSlice.actions.removeToken