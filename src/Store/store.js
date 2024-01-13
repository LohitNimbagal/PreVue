import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/authSlice"
import popularReducer from "../features/popularSlice";

const store = configureStore({
    reducer: {
        auth: authReducer,
        popular: popularReducer,
    }
})

export default store