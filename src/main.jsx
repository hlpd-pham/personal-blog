import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Root, { blogsLoader } from "./routes/root.jsx";
import ErrorPage from "./error-page.jsx";
import Blog, { oneBlogLoader } from "./routes/blog-detail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    loader: blogsLoader,
    children: [
      {
        path: "blogs/:blogId",
        element: <Blog />,
        loader: oneBlogLoader,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
