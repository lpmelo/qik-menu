import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  id: "",
  venueId: "",
  bannerImage: "",
  backgroundColour: "",
  primaryColour: "",
  primaryColourHover: "",
  navBackgroundColour: "",
};

const webSettingsSlice = createSlice({
  name: "webSettings",
  initialState,
  reducers: {
    saveWebSettings: (state, action) => {
      const keys = Object.keys(action.payload.webSettings);
      keys.forEach((key) => {
        state[key] = action.payload.webSettings[key];
      });
    },
  },
});

export const { saveWebSettings } = webSettingsSlice.actions;

export default webSettingsSlice.reducer;
