"use client";

import { configureStore } from "@reduxjs/toolkit";
import storage from "redux-persist/lib/storage";
import { persistReducer } from "redux-persist";
import { combineReducers } from "@reduxjs/toolkit";

import cartReducer from "./reducers/cartSlice";
import userReducer from "./reducers/userSlice";

const persistConfig = {
  key: "root",
  version: 1,
  whitelist: ["auth"],
  storage,
};

const reducer = combineReducers({
  cart: cartReducer,
  auth: userReducer,
});

const persistedReducer = persistReducer(persistConfig, reducer);

export const Store = configureStore({
  reducer: persistedReducer,
});

export type AppStore = typeof Store;
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
