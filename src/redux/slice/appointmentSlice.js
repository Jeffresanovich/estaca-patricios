import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  time: null,
  timeId: null,
  order: null,
  show: false,
};

const appointmentSlice = createSlice({
  name: "appointment",
  initialState,
  reducers: {
    setTimeId: (state, action) => {
      state.timeId = action.payload;
    },
    setTime: (state, action) => {
      state.time = action.payload;
    },
    setOrder: (state, action) => {
      state.order = action.payload;
      state.show = true;
    },
    cleanAppointment: (state) => {
      state.time = null;
      state.timeId = null;
      state.order = null;
      state.show = false;
    },
  },
});

export const { setTime, setOrder, cleanAppointment, setTimeId } =
  appointmentSlice.actions;

export default appointmentSlice.reducer;
