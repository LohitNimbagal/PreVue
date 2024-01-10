import { configureStore } from "@reduxjs/toolkit";
import watchlistReducer from '../Store/watchlistSlice'
import searchtermReducer from "../Store/searchtermSlice";
import detailsReducer from "./detailsSlice";
import authReducer from "./authSlice"

const store = configureStore({
    reducer: {
        watchlist: watchlistReducer,
        searchterm: searchtermReducer,
        detailsIdList: detailsReducer,
        auth: authReducer,
    }
})

export default store