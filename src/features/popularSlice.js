import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import envVariables from "../envVariables/envVariables"

export const fetchPopular = createAsyncThunk("popular", async ({type, category}) => {

    const response = await fetch (`https://api.themoviedb.org/3/${type}/${category}?api_key=${envVariables.apiKey}&language=en-US`)
    const result = await response.json()
    return result;
})

export const popular = createSlice({
    name: "popular",
    initialState: {
        data: [],
        loading: true,
        error: null,
    },
    extraReducers: (builder) => { 
        builder.addCase(fetchPopular.pending, (state) => {
            state.loading = true;
        } )
        builder.addCase(fetchPopular.fulfilled, (state, action) => {
            state.loading = false;
            state.data = action.payload;
        } )
        builder.addCase(fetchPopular.rejected, (state, action) => {
            state.loading = false;
            state.error = action.payload;
        } )
    }

        // extraReducers: (builder) => {
        //     // Add reducers for additional action types here, and handle loading state as needed
        //     builder.addCase(fetchUserById.fulfilled, (state, action) => {
        //       // Add user to the state array
        //       state.entities.push(action.payload)
        //     })

        // [fetchPopular.pending]: (state) => {
        //     state.loading = true;
        // },
        // [fetchPopular.fulfilled]: (state, action) => {
        //     state.loading = false;
        //     state.list = action.payload
        // },
        // [fetchPopular.rejected]: (state, action) => {
        //     state.loading = false;
        //     state.error = action.payload;
        // }
    }
)

export default popular.reducer