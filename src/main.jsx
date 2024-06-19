import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { globalStore } from "./redux/store.jsx";
import App from "./app/App.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={globalStore}>
      <App />
    </Provider>
  </React.StrictMode>
);
