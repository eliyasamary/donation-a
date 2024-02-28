import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import SpecificDonation from "./Components/SpesificDonation.jsx";
import NewDonation from "./Components/NewDonation.jsx";
import AllDonations from "./Components/AllDonations.jsx";
import Error from "./Components/Error.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/allItems",
        element: <AllDonations />,
        exact: true,
      },
      {
        path: "/item",
        element: <SpecificDonation />,
        exact: true,
      },
      {
        path: "/newItem",
        element: <NewDonation />,
        exact: true,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
