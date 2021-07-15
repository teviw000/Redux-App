import { configureStore } from "@reduxjs/toolkit";

import counterSlice from "./counter";
import authSlice from './auth';

//creating main store and merging all slices together

const store = configureStore({
  reducer: { counter: counterSlice.reducer, auth: authSlice.reducer },
});

export default store;
