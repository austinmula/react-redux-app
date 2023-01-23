import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import authAPI from "./authAPI";

const user = JSON.parse(localStorage.getItem("user"));
const initialState = {
  user: user ? user : null,
  message: "",
  isLoading: false,
  isError: false,
  isSuccess: false,
};

export const login = createAsyncThunk("auth/login", async (user, ThunkAPI) => {
  try {
    return await authAPI.login(user);
  } catch (error) {
    const message =
      (error.response && error.response.data && error.response.message) ||
      error.message ||
      error.message.toString();
    return ThunkAPI.rejectWithValue(error.response.data.message || message);
  }
});

export const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    reset: (state) => {
      state.message = "";
      state.isLoading = false;
      state.isError = false;
      state.isSuccess = false;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.isLoading = false;
        state.isSuccess = true;
        state.user = action.payload;
      })
      .addCase(login.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.message = action.payload;
        state.user = null;
      });
  },
});

export const { reset } = authSlice.actions;
export default authSlice.reducer;
