import { configureStore } from "@reduxjs/toolkit";
import watchlistReducer from '../Store/watchlistSlice'
import searchtermReducer from "../Store/searchtermSlice";

const store = configureStore({
    reducer: {
        watchlist: watchlistReducer,
        searchterm: searchtermReducer,
    }
})

export default store