import React, { Suspense, lazy } from "react";
import Login from "./Login";
import Browse from "./BrowseMovies/Browse";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import Shimmer from "./Shimmer";

const MovieDetails = lazy(() => import("./MovieDetails/MovieDetails"));
const Error = lazy(() => import("./Error"));

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
      path: "/info/:id",
      element: (
        <Suspense fallback={<Shimmer />}>
          <MovieDetails />
        </Suspense>
      ),
    },
    {
      path: "*",
      element: (
        <Suspense>
          <Error />
        </Suspense>
      ),
    },
  ]);

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
};

export default Body;
