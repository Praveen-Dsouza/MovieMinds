import React from "react";
import Login from "./Login";
import Browse from "./BrowseMovies/Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import MovieInfo from "./MovieInfo";

const Body = () => {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/browse",
      element: <Browse />,
    },
    {
      path: "/info",
      element: <MovieInfo />,
    },
  ]);

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
};

export default Body;
