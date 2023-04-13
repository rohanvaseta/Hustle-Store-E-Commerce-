import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isWishListOpen: false,
    wishListItems:[]
  }

  const wishListSlice = createSlice({
    name:"wishList",
    initialState,
    reducers:{

        toggleWishList(state,action){
            state.isWishListOpen = action.payload;
          },

          addWishListItem(state, action){
            const newItemId = action.payload.id;
    
            const existingItem = state.wishListItems.find(item => item.id === newItemId);
    
            if (existingItem){
              existingItem.quantity++;
            }else{
              state.wishListItems.push(action.payload)
            }
          },

          removeWishListItem(state, action){

            state.wishListItems = state.wishListItems.filter(item => item.id !== action.payload);
        },
    }
  })

export const { toggleWishList,addWishListItem,removeWishListItem  } = wishListSlice.actions;
export default wishListSlice.reducer;