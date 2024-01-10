import { createSlice } from "@reduxjs/toolkit";

const detailsSlice = createSlice({
    name: "detailsIdList",
    initialState: [{}],
    reducers:{
        addId(state, action){
            // console.log(action.payload);
            state.push(action.payload);
        },
    },
});

export const { addId } = detailsSlice.actions;
export default detailsSlice.reducer;