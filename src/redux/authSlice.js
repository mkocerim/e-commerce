import { createSlice } from "@reduxjs/toolkit";

const initialState={

    //TODO token bilgisini localStorage dan al 
    //FIXME 
    token:localStorage.getItem('token'),
    customerId: localStorage.getItem('customerId'),
    customerDetails:null,
}

export const authSlice = createSlice({
    name: 'authSlice',
    initialState,
    reducers:{
  
        setToken:(state,action)=>{
        
            localStorage.setItem('token',action.payload.token)
            localStorage.setItem('customerId',action.payload.customerId)


            state.token = action.payload.token
            state.customerId=action.payload.customerId

            // TODO Find customer Details api and remove thäs line

            state.customerDetails=action.payload.customerId

        },
        removeToken:(state,action)=>{

            localStorage.removeItem('token')
            localStorage.removeItem('customerId')
            localStorage.removeItem('carTokenValue')


            state.token=null
            state.customerId=null
            state.customerDetails=null

        },
         setCustomerDetails:(state,action)=>{
            console.log(">>SET CUSTOMER DETAILS",action)
            state.customerDetails=action.payload.customerDetails
            //TODO Handle Here
         }
    
    // TODO burayı birazdan olustur

    }
})


export default authSlice.reducer

export const{setToken,removeToken,setCustomerDetails}= authSlice.actions

//export const {setToken} = authSlice.actions
//export const removeToken= authSlice.actions.removeToken


