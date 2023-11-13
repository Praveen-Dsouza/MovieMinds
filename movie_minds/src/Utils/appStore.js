import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./StoreSlice/User";
import moviesReducer from "./StoreSlice/Movies";
import gptReducer from "./StoreSlice/GPT";
import configReducer from "./StoreSlice/Config";
import movieInfoReducer from "./StoreSlice/MovieInfo";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
    info: movieInfoReducer
  },
});

export default appStore;
