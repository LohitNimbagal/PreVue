import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import envVariables from "../envVariables/envVariables"

export const fetchCat = createAsyncThunk("category", async ({type, category}) => {

    const response = await fetch (`https://api.themoviedb.org/3/${type}/${category}?api_key=${envVariables.apiKey}&language=en-US`)
    const result = await response.json()
    return result;
})

export const category = createSlice({
    name: "category",
    initialState: {
        data: {},
        loading: false,
        error: null,
    },
    extraReducers: (builder) => { 
        builder.addCase(fetchCat.pending, (state) => {
            state.loading = true;
        } )
        builder.addCase(fetchCat.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        } )
        builder.addCase(fetchCat.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        } )
    }
    }
)

export default category.reducer