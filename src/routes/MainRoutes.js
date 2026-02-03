// project imports
import Loadable from "components/Loadable";
import MainLayout from "layouts/MainLayout";
import { lazy } from "react";

// ==============================|| MAIN ROUTING ||============================== //
const OpeningPage = Loadable(lazy(() => import("pages/OpeningPage")));
const Map = Loadable(lazy(() => import("pages/Map")));
const Step1Wallpaper = Loadable(
  lazy(() => import("pages/Wallpapers/Step1Wallpaper")),
);
const Step2Wallpaper = Loadable(
  lazy(() => import("pages/Wallpapers/Step2Wapaper")),
);
const SigningPage = Loadable(lazy(() => import("pages/SigningPage")));

const MainRoutes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <OpeningPage />,
      },
      {
        path: "/map",
        element: <Map />,
      },
      {
        path: "/step1-wallpaper",
        element: <Step1Wallpaper />,
      },
      {
        path: "/step2-wallpaper",
        element: <Step2Wallpaper />,
      },
      {
        path: "/signing",
        element: <SigningPage />,
      },
    ],
  },
];

export default MainRoutes;
