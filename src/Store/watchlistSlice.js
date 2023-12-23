import { createSlice } from "@reduxjs/toolkit";

const watchlistSlice = createSlice({
    name: "watchlist",
    initialState: [],
    reducers:{
        add(state, action){
            state.push(action.payload);
        },
        remove(state, action){
            console.log(action.payload);
            return state.filter((item) => item.imdbID !== action.payload)
        },
    },
});

export const { add, remove } = watchlistSlice.actions;
export default watchlistSlice.reducer;