import { createSlice } from "@reduxjs/toolkit";

const watchlistSlice = createSlice({
    name: "watchlist",
    initialState: [],
    reducers: {
        addToWatchlist: (state, action) => {
            const isAlreadyAdded = state.some(item => item.id === action.payload.id);

            if (!isAlreadyAdded) {
            state.push(action.payload)
        }
    }}
})

export const {addToWatchlist} = watchlistSlice.actions
export default watchlistSlice.reducer
