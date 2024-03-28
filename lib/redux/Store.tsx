"use client";

import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./reducers/cartSlice";
import userReducer from "./reducers/userSlice";

export const Store = configureStore({
  reducer: {
    cart: cartReducer,
    auth: userReducer,
  },
});

export type AppStore = typeof Store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
