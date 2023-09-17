import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import { checkValidData } from "../Utils/Validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../Utils/Firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { AUTH_BG, USER_AVATAR } from "../Utils/Constants";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [errMsg, setErrMsg] = useState();
  const dispatch = useDispatch();

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
    setErrMsg("");
  };

  const handleButtonClick = () => {
    // Validate the form data
    const inputEmailValue = email?.current?.value;
    const inputPasswordValue = password?.current?.value;
    const inputUsernameValue = name?.current?.value;

    const message = checkValidData(inputEmailValue, inputPasswordValue);
    setErrMsg(message);

    if (message) return;

    // Sign / Sign Up
    if (!isSignInForm) {
      // Sign Up Logic
      createUserWithEmailAndPassword(auth, inputEmailValue, inputPasswordValue)
        .then((resp) => {
          // Signed in
          const user = resp.user;
          console.log("user", user);
          updateProfile(user, {
            displayName: inputUsernameValue,
            photoURL: USER_AVATAR
          })
            .then(() => {
              // we cant extract from user since it will not have updated(previous) values so we take from auth
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(addUser({ uid, email, displayName, photoURL }));
            })
            .catch((err) => {
              setErrMsg("Error creating user");
            });
        })
        .catch((err) => {
          setErrMsg("Email already in use!");
        });
    } else {
      // Sign In Logic
      signInWithEmailAndPassword(auth, inputEmailValue, inputPasswordValue)
        .then((resp) => {
          // Signed in
          const user = resp.user;
          console.log("sign in user", user);
        })
        .catch((err) => {
          setErrMsg(`Sorry, we can't find an account with this email!`);
        });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="absolute w-full">
        <img
          className="bg-gradient from-black w-full"
          src={AUTH_BG}
          alt="login"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-2 w-full bg-gray-700 rounded-lg text-base"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-2 my-2 w-full bg-gray-700 rounded-lg text-base"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-2 w-full bg-gray-700 rounded-lg text-base"
        />
        <p className="text-red-500 text-base font-bold">{errMsg}</p>
        <button
          className="p-2 my-6 bg-red-700 w-full rounded-lg text-base"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-2 text-sm cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to MovieMinds? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
