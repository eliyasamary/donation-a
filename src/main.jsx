import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import SpecificDonation from "./Components/SpesificDonation.jsx";
import AllDonations from "./Components/AllDonations.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <AllDonations />,
      },
      {
        path: "/:id",
        element: <SpecificDonation />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
