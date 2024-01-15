import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice"
import categoryReducer from "../features/fetchCatSlice";
import searchReducer from "../features/searchSlice";
import infoReducer from "../features/fetchInfoSlice";
import setSelectionReducer from "../features/setSelectionSlice"

const store = configureStore({
    reducer: {
        selection: setSelectionReducer,
        auth: authReducer,
        category: categoryReducer,
        searchResult: searchReducer,
        info: infoReducer,
    }
})

export default store