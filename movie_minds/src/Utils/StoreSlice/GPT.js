import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        movieResults: null,
        movieNames: null
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResults: (state, actions) => {
            const { movieNames, movieResults } = actions.payload
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        }
    }
})

export const { toggleGptSearchView, addGptMovieResults } = gptSlice.actions; 

export default gptSlice.reducer;