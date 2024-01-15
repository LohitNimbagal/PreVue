import { createSlice } from "@reduxjs/toolkit";


const setCat = createSlice({
    name: "cat",
    initialState: {
        type: "movie",
        cat: "popular"
    },
    reducers: {
        set: (state, action) => {
            state.type = action.payload.type
            state.cat = action.payload.category
        }
    }
})

export const {set} = setCat.actions
export default setCat.reducer;