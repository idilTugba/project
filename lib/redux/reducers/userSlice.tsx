import { createSlice } from "@reduxjs/toolkit";

interface userState {
  user: object | null;
  isAuthenticated: boolean;
}

const initialState: userState = {
  user: null,
  isAuthenticated: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess(state, action) {
      state.user = action.payload;
      state.isAuthenticated = true;
    },
    signout(state) {
      state.user = null;
      state.isAuthenticated = false;
    },
  },
});

export const { loginSuccess, signout } = authSlice.actions;
export default authSlice.reducer;
