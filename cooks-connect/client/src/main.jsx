import React from "react";
import Search from "./pages/Search.jsx";
import "./index.css";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LandingPage from "./pages/Landing/LandingPage.jsx";
import Profile from "./pages/Profile/Profile.jsx";
import RecipeItemPage from "./pages/RecipeItemPage.jsx";
import LoginScreen from "./pages/Login/LoginScreen.jsx";
import RegisterScreen from "./pages/Register/RegisterScreen.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/recipes",
    element: <Search />,
  },
  {
    path: "/profile",
    element: <Profile />,
  },
  {
    path: `/recipe/:id`,
    element: <RecipeItemPage />,
  },
  {
    path: "/login",
    element: <LoginScreen />
  },
  {
    path: "register",
    element: <RegisterScreen />
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
