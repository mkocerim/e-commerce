import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  tokenValue: localStorage.getItem("cartTokenValue"),
  items: [],
  id: null,
  name:"",
};

export const cartSlice = createSlice({
  name: "cartSlice",
  initialState,
  reducers: {
    setTokenValue: (state, action) => {
      console.log(">> SET TOKEN VALUE ACTION", action);

      localStorage.setItem("cartTokenValue", action.payload.tokenValue);

      state.tokenValue = action.payload.tokenValue;
    },
    updateFullCart: (state,action)=>{

      console.log(">>UPDATE FULL CART ACTION", action);

      return action.payload  //bütün state cektigimiz için 
    }
  },
});

export default cartSlice.reducer;

export const { setTokenValue, updateFullCart} = cartSlice.actions;
