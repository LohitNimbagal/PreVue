import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../store/authSlice"
import watchlistReducer from "../store/watchlistSlice"

const store = configureStore({
    reducer: {
        auth: authReducer,
        watchlist: watchlistReducer
    }
})

export default store