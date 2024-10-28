import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./slice/AuthSlice";
const Store = configureStore({
  reducer: {
    auth: authSliceReducer,
  },
  devTools: true,
});
export default Store;
