import { combineReducers, configureStore } from "@reduxjs/toolkit";
import companyReducer from "../features/company/companySlice";
import webSettingsReducer from "../features/webSettings/webSettingsSlice";
import { challengeApi } from "../features/challengeApi/challengeApi";

const rootReducer = combineReducers({
  company: companyReducer,
  webSettings: webSettingsReducer,
  [challengeApi.reducerPath]: challengeApi.reducer,
});

export const globalStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(challengeApi.middleware),
});
