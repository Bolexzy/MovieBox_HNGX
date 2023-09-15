import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import MovieDetails from "./components/MovieDetails/MovieDetails";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/movies/:id",
    element: <MovieDetails />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);
