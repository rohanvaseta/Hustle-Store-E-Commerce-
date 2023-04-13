import { configureStore } from "@reduxjs/toolkit";
import cart1 from "./slices/cartSlice"
import wishlist from "./slices/wishListSlice";


const store = configureStore({
  reducer :{
    cart:cart1,
    wishlist:wishlist,
  }
})

export default store;