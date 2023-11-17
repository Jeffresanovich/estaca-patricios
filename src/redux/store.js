import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

//Sleces
import appointmentSlice from "./slice/appointmentSlice";
import donorSlice from "./slice/donorSlice";

//Services
import { patriciosStakeApi } from "../services/patriciosStakeApi";

export const store = configureStore({
  reducer: {
    appointmentSlice,
    donorSlice,
    [patriciosStakeApi.reducerPath]: patriciosStakeApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(patriciosStakeApi.middleware),
});

setupListeners(store.dispatch);
