import { createSlice } from "@reduxjs/toolkit";

const navSlice = createSlice({
  name: "navslice",
  initialState: {
    isPanelOpened: false,
  },
  reducers: {
    togglePanel: (state) => {
      state.isPanelOpened = !state.isPanelOpened;
    },
  },
});

export const { togglePanel } = navSlice.actions;
export default navSlice.reducer;
