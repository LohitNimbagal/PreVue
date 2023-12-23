import { createSlice } from "@reduxjs/toolkit";

const searchtermSlice = createSlice({
    name: "searchterm",
    initialState: [],
    reducers:{
        add(state, action){
            state.push(action.payload);
        },
        get(state, action){
            return state.payload;
        },
    },
});

export const { add } = searchtermSlice.actions;
export default searchtermSlice.reducer;