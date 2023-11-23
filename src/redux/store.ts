import { configureStore } from "@reduxjs/toolkit";
import navSlice from "./slices/navSlice.ts";

const store = configureStore({
  reducer: {
    navbar: navSlice,
    // Add other slices here
  },
});

export default store;
