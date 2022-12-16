import { createSlice } from "@reduxjs/toolkit";

const initialState={

    //TODO token bilgisini localStorage dan al 
    //FIXME 
    token:localStorage.getItem('token')
}

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers:{
  
        setToken:(state,action)=>{
        
            localStorage.setItem('token',action.payload.token)

            state.token = action.payload.token
        },
        removeToken:(state,action)=>{

            localStorage.removeItem('token')
            state.token=null

        }
    
    // TODO burayı birazdan olustur

    }
})


export default authSlice.reducer

export const{setToken,removeToken}= authSlice.actions

//export const {setToken} = authSlice.actions
//export const removeToken= authSlice.actions.removeToken


