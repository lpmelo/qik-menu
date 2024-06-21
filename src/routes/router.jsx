import { createBrowserRouter } from "react-router-dom";
import Menu from "../pages/menu/index";
import AuthGuardian from "../components/AuthGuardian";

const defaultRoutes = [
  { path: "*", element: <AuthGuardian /> },
  {
    path: "/home",
    element: <Menu />,
  },
];

const returnRoutes = () => {
  const protectedRoutes = defaultRoutes.map((route) => {
    if (route.path != "/") {
      route = {
        ...route,
        element: <AuthGuardian>{route.element}</AuthGuardian>,
      };
    }
    return route;
  });

  return protectedRoutes;
};

const router = createBrowserRouter(returnRoutes());

export { router, defaultRoutes };
