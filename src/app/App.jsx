import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@mui/material";
import { globalStore } from "../redux/store";
import defaultTheme from "../config/theme/theme";
import { router } from "../routes/router";

const App = () => {
  return (
    <>
      <Provider store={globalStore}>
        <ThemeProvider theme={defaultTheme}>
          <RouterProvider router={router} />
        </ThemeProvider>
      </Provider>
    </>
  );
};

export default App;
