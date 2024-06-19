import { combineReducers, configureStore } from "@reduxjs/toolkit";
import companyReducer from "../features/company/companySlice";
import webSettingsReducer from "../features/webSettings/webSettingsSlice";

const rootReducer = combineReducers({
  company: companyReducer,
  webSettings: webSettingsReducer,
});

export const globalStore = configureStore({
  reducer: rootReducer,
});
