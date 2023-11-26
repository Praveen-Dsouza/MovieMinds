import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
    name: 'gpt',
    initialState: {
        showGptSearch: false,
        movieResults: null,
        movieNames: null,
        showGptMovies: false
    },
    reducers: {
        toggleGptSearchView: (state) => {
            state.showGptSearch = !state.showGptSearch;
        },
        addGptMovieResults: (state, actions) => {
            const { movieNames, movieResults } = actions.payload
            state.movieNames = movieNames;
            state.movieResults = movieResults;
        },
        clearGptMovieResults: (state) => {
            state.movieNames = null;
            state.movieResults = null;
        },
        gptSearchTrue: (state) => {
            state.showGptMovies = true
        },
        gptSearchFalse: (state) => {
            state.showGptMovies = false
        }
    }
})

export const { toggleGptSearchView, addGptMovieResults, clearGptMovieResults, gptSearchTrue, gptSearchFalse } = gptSlice.actions; 

export default gptSlice.reducer;