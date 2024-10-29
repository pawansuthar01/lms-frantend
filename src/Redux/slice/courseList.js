import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import toast from "react-hot-toast";
import axiosInstance from "../../helper/axiosinstance";

const initialState = {
  courseData: [],
};
export const getAllCourseList = createAsyncThunk("/course/get", async () => {
  try {
    const res = axiosInstance.get("/api/v1/Course");
    toast.promise(res, {
      loading: "wait! Courses is Loading...",
      success: "successFully Courses Loaded...",
      error: "failed Courses Load..",
    });
    return (await res).data.courses;
  } catch (error) {
    toast.error(error?.response?.message);
  }
});
const courseSliceReducer = createSlice({
  name: "Course",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAllCourseList.fulfilled, (state, action) => {
      if (action.payload) {
        state.courseData = [...action.payload];
      }
    });
  },
});
export default courseSliceReducer.reducer;
