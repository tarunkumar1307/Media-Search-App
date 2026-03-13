import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/searchSlice";
import collectionSlice from "./features/collectionSlice";

export const store = configureStore({
    reducer:{
        search: searchReducer,
        collection: collectionSlice
    }
})