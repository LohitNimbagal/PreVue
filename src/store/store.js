import { configureStore } from "@reduxjs/toolkit";
import {authReducer} from "../pages/index"

const store = configureStore({
    reducer: {
        auth: authReducer,
    }
})

export default store