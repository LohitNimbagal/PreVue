import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice"
import categoryReducer from "../features/fetchCatSlice";
import searchReducer from "../features/searchSlice";
import infoReducer from "../features/fetchInfoSlice";
import setCatReducer from "../features/setCatSlice"

const store = configureStore({
    reducer: {
        cat: setCatReducer,
        auth: authReducer,
        category: categoryReducer,
        searchResult: searchReducer,
        info: infoReducer,
    }
})

export default store