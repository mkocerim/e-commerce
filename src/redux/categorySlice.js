import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  //TODO token bilgisini localStorage dan al
  //FIXME
  categories: null,
};

export const categorySlice = createSlice({
  name: "categorySlice",
  initialState,
  reducers: {
    setCategories: (state, action) => {
      state.categories = action.payload.categories;
    },

    // TODO burayı birazdan olustur
  },
});

export default categorySlice.reducer;

export const { setCategories } = categorySlice.actions;

//export const {setToken} = authSlice.actions
//export const removeToken= authSlice.actions.removeToken
