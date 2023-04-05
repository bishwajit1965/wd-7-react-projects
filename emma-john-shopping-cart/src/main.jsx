import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Products from "./components/products/Products";
import Orders from "./components/orders/Orders";
import Layout from "./components/layout/Layout";
import NotFound from "./components/notFound/NotFound";
import Inventory from "./components/inventory/Inventory";
import Login from "./components/login/Login";
import cartProductsLoader from "./components/loaders/CartProductsLoader";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Products />,
      },
      {
        path: "/order",
        element: <Orders />,
        loader: cartProductsLoader,
      },
      {
        path: "/inventory",
        element: <Inventory />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
    {/* <App /> */}
  </React.StrictMode>
);
