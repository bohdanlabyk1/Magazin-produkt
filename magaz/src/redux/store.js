import {configureStore} from "@reduxjs/toolkit"
import categorisSlis from "./categorisSlis";
import productSlice from "./productSlice";

export const store = configureStore({
    reducer:{
        categoris: categorisSlis,
        products: productSlice
    },
    devTools: true,
});