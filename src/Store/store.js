import { configureStore } from "@reduxjs/toolkit";
import watchlistReducer from '../Store/watchlistSlice'
import searchtermReducer from "../Store/searchtermSlice";
import detailsReducer from "./detailsSlice";

const store = configureStore({
    reducer: {
        watchlist: watchlistReducer,
        searchterm: searchtermReducer,
        detailsIdList: detailsReducer,
    }
})

export default store