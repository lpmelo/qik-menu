import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { globalStore } from "./redux/store.jsx";
import { ThemeProvider } from "@mui/material";
import { RouterProvider } from "react-router-dom";
import defaultTheme from "./config/theme/theme.jsx";
import router from "./routes/router.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={globalStore}>
      <ThemeProvider theme={defaultTheme}>
        <RouterProvider router={router} />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
