// redux/store.js
"use client";
import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import { rootReducer } from "./rootReducers";
import { TypedUseSelectorHook } from "react-redux";
import {
  useDispatch as useReduxDispatch,
  useSelector as useReduxSelector,
} from "react-redux";
const store = configureStore({
  reducer: rootReducer,
  // Add middleware or enhancers if needed
});
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;

export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;

export const useDispatch = () => useReduxDispatch<AppDispatch>();

export default store;
