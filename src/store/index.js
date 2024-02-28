import { configureStore, createReducer } from "@reduxjs/toolkit";
import hideItemsSlice from "./slice/hideItems.slice";

const store = configureStore({
    reducer:{
        hideItemsSlice
    }
})

export default store;
