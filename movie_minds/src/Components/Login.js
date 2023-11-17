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
import { addUser } from "../Utils/StoreSlice/User";
import { BG_URL, USER_AVATAR } from "../Utils/Constants/Constants";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const dispatch = useDispatch();
  const [errMsg, setErrMsg] = useState();
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);

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
          updateProfile(user, {
            displayName: inputUsernameValue,
            photoURL: USER_AVATAR,
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
          className="h-screen object-cover bg-gradient from-black w-full"
          src={BG_URL}
          alt="login"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className="w-8/12 md:w-3/12 absolute p-8 md:p-12 bg-black my-28 md:my-36 mx-auto right-0 left-0 text-white rounded-md md:rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-xl md:text-3xl py-2 md:py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-1 md:p-2 my-1 md:my-2 w-full bg-gray-700 rounded-md md:rounded-lg text-sm md:text-base"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email Address"
          className="p-1 md:p-2 my-1 md:my-2 w-full bg-gray-700 rounded-md md:rounded-lg text-sm md:text-base"
        />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-1 md:p-2 my-1 md:my-2 w-full bg-gray-700 rounded-md md:rounded-lg text-sm md:text-base"
        />
        <p className="text-red-500 text-sm md:text-base font-bold">{errMsg}</p>
        <button
          className="p-1 md:p-2 my-4 md:my-6 bg-red-700 w-full rounded-md md:rounded-lg text-sm md:text-base"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-1 md:py-2 text-[10px] md:text-sm cursor-pointer" onClick={toggleSignInForm}>
          {isSignInForm
            ? "New to MovieMinds? Sign Up Now"
            : "Already registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
