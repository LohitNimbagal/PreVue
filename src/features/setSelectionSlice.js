import { createSlice } from "@reduxjs/toolkit";


const setSelectionSlice = createSlice({
    name: "selection",
    initialState: {
        type: "movie",
        category: "popular"
    },
    reducers: {
        set: (state, action) => {
            state.type = action.payload.type
            state.category = action.payload.category
        }
    }
})

export const {set} = setSelectionSlice.actions;
export default setSelectionSlice.reducer;