import { configureStore } from "@reduxjs/toolkit";
import { restaurantSlice } from "./slices/resturantSlice";
import { cartSlice } from "./slices/cartSlice";

export const store = configureStore({
  reducer: {
    restaurant: restaurantSlice.reducer,
    cart: cartSlice.reducer,
  },
});
