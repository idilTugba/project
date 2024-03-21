"use client";

import { configureStore } from "@reduxjs/toolkit";

import cartReducer from "./reducers/cartSlice";

export const Store = configureStore({
  reducer: {
    cart: cartReducer,
  },
});

export type AppStore = typeof Store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
