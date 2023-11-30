import { createSlice } from "@reduxjs/toolkit";

const movieDetailsSlice = createSlice({
    name: 'movieDetails',
    initialState: {
        movieInfo: [],
        movieCredits: []
    },
    reducers: {
        addMovieInfo: (state, actions) => {            
            state.movieInfo = actions.payload
        },
        addMovieCredits: (state, actions) => {            
            state.movieCredits = actions.payload
        }
    }
})

export const { addMovieInfo, addMovieCredits } = movieDetailsSlice.actions;

export default movieDetailsSlice.reducer;