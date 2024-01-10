import { createSlice } from "@reduxjs/toolkit";

const watchlistSlice = createSlice({
    name: "watchlist",
    initialState: [],
    reducers:{
        add(state, action){
            if (!state.some(item => item.id === action.payload.id)) {
                state.push(action.payload);
              }
        },
        remove(state, action){
            return state.filter((item) => item.id !== action.payload)
        },
    },
});

export const { add, remove } = watchlistSlice.actions;
export default watchlistSlice.reducer;