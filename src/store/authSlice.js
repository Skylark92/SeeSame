import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    isLogin: false,
    user: null
  },
  reducers: {
    LOGIN(state, action) {
      localStorage.setItem("seesame-t", action.payload.uid);
      state.isLogin = true;
      state.user = {
        ...action.payload
      }
    },
    LOGOUT(state) {
      localStorage.removeItem("seesame-t");
      state.isLogin = false;
      state.user = null;
    },
    PFUPDATE(state, action) {
      state.user.profile = {
        ...action.payload
      }
    }
  }
});

export const { LOGIN, LOGOUT, PFUPDATE } = authSlice.actions;
export default authSlice.reducer;