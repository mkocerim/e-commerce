import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./authSlice";
import cartSlice from "./cartSlice";
import categorySlice from "./categorySlice";

export default configureStore({
  reducer: {
    authState: authSlice,
    categoryState: categorySlice,
    cartState: cartSlice
  },
});
