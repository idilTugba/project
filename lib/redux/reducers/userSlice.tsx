import { createSlice } from "@reduxjs/toolkit";

interface userState {
  userName: string | null;
  userID: string | null;
  isAuthenticated: boolean;
}

const initialState: userState = {
  userName: null,
  userID: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      console.log("loginSuccess payload:", action.payload);
      state.userName = action.payload.userName;
      state.userID = action.payload.userID;
      state.isAuthenticated = true;
    },
    signout(state) {
      state.userName = null;
      state.userID = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, signout } = authSlice.actions;
export default authSlice.reducer;
