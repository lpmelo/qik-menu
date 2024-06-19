import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { globalStore } from "./redux/store.jsx";
import { ThemeProvider } from "@mui/material";
import defaultTheme from "./config/theme/theme.jsx";
import App from "./app/App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={globalStore}>
      <ThemeProvider theme={defaultTheme}>
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
);
