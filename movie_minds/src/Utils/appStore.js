import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./StoreSlice/User";
import moviesReducer from "./StoreSlice/Movies";

const appStore = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer
  },
});

export default appStore;
