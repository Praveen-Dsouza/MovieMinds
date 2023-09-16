import React, { useRef, useState } from "react";
import Navbar from "./Navbar";
import { checkValidData } from "../Utils/Validate";

const Login = () => {
  const [isSignInForm, setisSignInForm] = useState(true);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const [errMsg, setErrMsg] = useState();

  const toggleSignInForm = () => {
    setisSignInForm(!isSignInForm);
  };

  const handleButtonClick = () => {
    // Validate the form data
    const msg = checkValidData(email.current.value, password.current.value)
    setErrMsg(msg)

    // Sign / Sign Up

  }

  return (
    <div>
      <Navbar />
      <div className="absolute ">
        <img
          className="bg-gradient from-[#333]"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg"
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
        <button className="p-2 my-6 bg-red-700 w-full rounded-lg text-base" onClick={handleButtonClick}>
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
