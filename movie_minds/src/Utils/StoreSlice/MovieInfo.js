import { createSlice } from "@reduxjs/toolkit";

const movieInfoSlice = createSlice({
    name: 'movieInfo',
    initialState: {
        movieInfo: []
    },
    reducers: {
        addMovieInfo: (state, actions) => {            
            state.movieInfo = actions.payload
        }
    }
})

export const { addMovieInfo } = movieInfoSlice.actions;

export default movieInfoSlice.reducer;