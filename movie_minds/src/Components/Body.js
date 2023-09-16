import React, { useEffect } from 'react'
import Login from './Login'
import Browse from './Browse'
import {createBrowserRouter} from "react-router-dom";
import { RouterProvider } from 'react-router-dom';
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../Utils/userSlice";
import { auth } from '../Utils/Firebase';

const Body = () => {
  const dispatch = useDispatch();

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

  useEffect(() => {
    Authuser()
  }, [])

  const Authuser = onAuthStateChanged(auth, (user) => {

    if (user) {
      // https://firebase.google.com/docs/reference/js/auth.user
      const { uid, email, displayName, photoURL } = user;
      console.log('uid', user)

      // Store user data in user slice
      dispatch(addUser({ uid, email, displayName, photoURL }))
    } else {
      // User is signed out
      dispatch(removeUser());
    }
});

  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  )
}

export default Body
