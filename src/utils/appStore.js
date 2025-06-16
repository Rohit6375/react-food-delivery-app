import { configureStore } from "@reduxjs/toolkit";
import cartReducer from "./cartSlice";

const appStore=configureStore({
    reducer:{
        cart:cartReducer,
        //user: userReducer : different reducer for diff store
    },
});


export default appStore;