import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice"
import categoryReducer from "../features/fetchCatSlice";
import searchReducer from "../features/searchSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        category: categoryReducer,
        searchResult: searchReducer,
    }
})

export default store