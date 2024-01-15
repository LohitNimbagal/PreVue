import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import envVariables from "../envVariables/envVariables"

export const fetchInfo = createAsyncThunk("info", async ({type, id}) => {

    const response = await fetch (`https://api.themoviedb.org/3/${type}/${id}?api_key=${envVariables.apiKey}`)
    const result = await response.json()
    return result;
})

export const info = createSlice({
    name: "info",
    initialState: {
        data: {},
        loading: false,
        error: null,
    },
    extraReducers: (builder) => { 
        builder.addCase(fetchInfo.pending, (state) => {
            state.loading = true;
        } )
        builder.addCase(fetchInfo.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        } )
        builder.addCase(fetchInfo.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        } )
    }
    }
)

export default info.reducer