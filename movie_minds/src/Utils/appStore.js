import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./StoreSlice/User";
import moviesReducer from "./StoreSlice/Movies";
import gptReducer from "./StoreSlice/GPT";
import configReducer from "./StoreSlice/Config";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer
  },
});

export default appStore;
