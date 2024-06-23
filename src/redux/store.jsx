import { combineReducers, configureStore } from "@reduxjs/toolkit";
import companyReducer from "../features/company/companySlice";
import webSettingsReducer from "../features/webSettings/webSettingsSlice";
import menuReducer from "../features/menu/menuSlice";
import { challengeApi } from "../features/challengeApi/challengeApi";

const rootReducer = combineReducers({
  company: companyReducer,
  webSettings: webSettingsReducer,
  menu: menuReducer,
  [challengeApi.reducerPath]: challengeApi.reducer,
});

export const globalStore = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(challengeApi.middleware),
});
