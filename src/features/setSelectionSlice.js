import { createSlice } from "@reduxjs/toolkit";


const setSelection = createSlice({
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

export const {set} = setSelection.actions
export default setSelection.reducer;