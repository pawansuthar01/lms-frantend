import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { toast } from "react-hot-toast";
import axiosInstance from "../../helper/axiosinstance";

const initialState = {
  isLoggedIn: localStorage.getItem("isLoggedIn") || false,
  role: localStorage.getItem("role") || "",
  data: localStorage.getItem("data") || {},
};

export const createAccount = createAsyncThunk("/auth/signup", async (data) => {
  try {
    const res = axiosInstance.post("/api/v1/user/register", data);

    toast.promise(res, {
      loading: "Wait! creating your account",
      success: (data) => {
        return data?.data?.message;
      },

      error: (data) => {
        // console.log(data);
        return data?.response?.data?.message;
      },
    });
    return (await res).data;
  } catch (e) {
    toast.error(e?.response?.message);
  }
});
export const login = createAsyncThunk("/auth/Login", async (data) => {
  try {
    const res = axiosInstance.post("/api/v1/user/login", data);

    toast.promise(res, {
      loading: "Wait! login in process...",
      success: (data) => {
        return data?.data?.message;
      },

      error: (data) => {
        return data?.response?.data?.message;
      },
    });
    return (await res).data;
  } catch (e) {
    toast.error(e?.response?.message);
  }
});
export const logout = createAsyncThunk("/auth/logout", async () => {
  try {
    const res = axiosInstance.get("/api/v1/user/logout");

    toast.promise(res, {
      loading: "Wait! Logout in process...",
      success: (data) => {
        return data?.data?.message;
      },

      error: (data) => {
        return data?.response?.data?.message;
      },
    });
    return (await res).data;
  } catch (e) {
    toast.error(e?.response?.message);
  }
});
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(login.fulfilled, (state, action) => {
        localStorage.setItem("data", JSON.stringify(action?.payload?.Data));
        localStorage.setItem("isLoggedIn", true);
        localStorage.setItem("role", action?.payload?.Data?.role);
        state.isLoggedIn = true;
        state.data = action?.payload?.user;
        state.role = action?.payload?.user?.role;
      })

      .addCase(logout.fulfilled, (state) => {
        localStorage.clear();
        state.data = {};
        state.isLoggedIn = false;
        state.role = "";
      });
  },
});

// export const {} = authSlice.actions;
export default authSlice.reducer;
