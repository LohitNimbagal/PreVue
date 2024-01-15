import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import envVariables from "../envVariables/envVariables"

export const search = createAsyncThunk("searchResult", async (term) => {

    const response = await fetch (`https://api.themoviedb.org/3/search/multi?query=${term}&api_key=${envVariables.apiKey}&language=en-US`)
    console.log(response);
    const result = await response.json()
    return result;
})

export const searchResult = createSlice({
    name: "searchResult",
    initialState: {
        data: {},
        loading: false,
        error: null,
    },
    extraReducers: (builder) => { 
        builder.addCase(search.pending, (state) => {
            state.loading = true;
        } )
        builder.addCase(search.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        } )
        builder.addCase(search.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        } )
    }
    }
)

export default searchResult.reducer