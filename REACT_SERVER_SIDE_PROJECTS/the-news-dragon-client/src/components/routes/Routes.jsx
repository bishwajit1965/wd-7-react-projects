import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/home/Home";
import Main from "../layout/Main";
import Category from "../pages/home/category/Category";
import NewsLayout from "../layout/NewsLayout";
import News from "../pages/news/news/News";
import About from "../pages/about/About";
import Career from "../pages/career/Career";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Category />,
        loader: () => fetch("http://localhost:5000/news"),
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/career",
        element: <Career />,
      },
      {
        path: "/category/:id",
        element: <Category />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/categories/${params.id}`),
      },
      {
        path: "/news",
        element: <NewsLayout />,
        children: [
          {
            path: ":id",
            element: <News />,
            loader: ({ params }) =>
              fetch(`http://localhost:5000/news/${params.id}`),
          },
        ],
      },
    ],
  },
]);

export default router;
