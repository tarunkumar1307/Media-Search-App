import { configureStore } from "@reduxjs/toolkit";
import searchReducer from "./features/searchSlice";
import collectionSlice from "./features/collectionSlice";
import uiSlice from "./features/uiSlice"

export const store = configureStore({
    reducer:{
        search: searchReducer,
        collection: collectionSlice,
        ui: uiSlice
    }
})