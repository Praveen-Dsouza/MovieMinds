import React from 'react'
import Login from './Login'
import Browse from './Browse'
import {createBrowserRouter} from "react-router-dom";
import { RouterProvider } from 'react-router-dom';

const Body = () => {
    const routes = createBrowserRouter([
        {
            path: '/',
            element: <Login/>
        },
        {
            path: '/browse',
            element: <Browse/>
        }
    ])

  return (
    <div>
      <RouterProvider router={routes}>

      </RouterProvider>
    </div>
  )
}

export default Body
