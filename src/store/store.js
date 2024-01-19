import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice"
import setSelectionReducer from "../features/setSelectionSlice"

const store = configureStore({
    reducer: {
        selection: setSelectionReducer,
        auth: authReducer,
    }
})

export default store