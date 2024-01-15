import { createSlice } from "@reduxjs/toolkit"

const setDetailsSlice = createSlice({
    name: "details",
    initialState: {
        type: null,
        id: null,
    },
    reducers: {
        setDetails: (state, action) => {
            state.type = action.payload.typee;
            state.id = action.payload.id;
        }
    }
})

export const {setDetails} = setDetailsSlice.actions
export default setDetailsSlice.reducer