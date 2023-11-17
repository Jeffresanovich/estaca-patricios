import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: null,
  user: {},
};

const donorSlice = createSlice({
  name: "donor",
  initialState,
  reducers: {
    setUserId: (state, action) => {
      state.id = action.payload;
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUserId: (state) => {
      state.id = null;
    },
  },
});

export const { setUserId, clearUserId } = donorSlice.actions;

export default donorSlice.reducer;
