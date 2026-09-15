import { configureStore } from "@reduxjs/toolkit"
import cartReducer from "./cartslice"

const Appstore=configureStore({
    reducer:{
        cart:cartReducer,
    }
})

Appstore.subscribe(() => {
  const state = Appstore.getState();

  localStorage.setItem(
    "cart",
    JSON.stringify(state.cart.items)
  );
});


export default Appstore;