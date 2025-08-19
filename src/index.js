import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import Home from "./pages/home";
import Html from "./pages/html";
import Css from "./pages/css";
import JavaScript from "./pages/javascript";

import { createBrowserRouter, RouterProvider,  } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div style={{ color: "red" }}>Page not found</div>,
  },
  {
    path: "/html",
    element: <Html />,
  },
  {
    path: "/javascript",
    element: <JavaScript />,
  },
  {
    path: "/css",
    element: <Css />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
