"use client";
import { combineReducers } from "@reduxjs/toolkit";
import { basicReducer } from "./slices/basicSlice";

export const rootReducer = combineReducers({
  basic: basicReducer,
});

export const persistConfig = {
  key: "root",
  //   storage,
  //   whitelist: ["basic"],
  //   transforms: [saveOtpResendTimerFilter, saveCheckinTimerFilter],
};

// export const persistedReducer = persistReducer(persistConfig, rootReducer);
