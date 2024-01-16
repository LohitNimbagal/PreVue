import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice"
// import categoryReducer from "../features/fetchCatSlice";
import searchReducer from "../features/searchSlice";
import setSelectionReducer from "../features/setSelectionSlice"
import setDetailsReducer from "../features/setDetailsSlice";

const store = configureStore({
    reducer: {
        selection: setSelectionReducer,
        auth: authReducer,
        searchResult: searchReducer,
        details: setDetailsReducer
    }
})

export default store