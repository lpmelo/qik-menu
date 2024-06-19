import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  name: "",
  internalName: "",
  description: null,
  liveFlag: null,
  demoFlag: null,
  address1: "",
  address2: "",
  address3: null,
  city: "",
  county: "",
  postcode: "",
  country: "",
  timezoneOffset: "",
  locale: "",
  timeZone: "",
  ccy: "",
  ccySymbol: "",
  currency: "",
};

const companySlice = createSlice({
  name: "company",
  initialState,
  reducers: {
    saveCompanyData: (state, action) => {
      const keys = Object.keys(action.payload);
      keys.forEach((key) => {
        if (key != "webSettings") {
          state[key] = action.payload[key];
        }
      });
    },
  },
});

export const { saveCompanyData } = companySlice.actions;
export default companySlice.reducer;
