import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "./slice/AuthSlice";
import courseSliceReducer from "../Redux/slice/courseList";
const Store = configureStore({
  reducer: {
    auth: authSliceReducer,
    course: courseSliceReducer,
  },
  devTools: true,
});
export default Store;
