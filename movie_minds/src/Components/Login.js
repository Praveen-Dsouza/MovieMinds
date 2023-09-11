import React from "react";
import Navbar from "./Navbar";

const Login = () => {
  return (
    <div>
      <Navbar />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="login"
        />
      </div>
      <form className="w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 text-white">
        <h1 className="font-bold text-3xl py-4">Sign In</h1>
        <input
          type="email"
          placeholder="Email Address"
          className="p-2 my-4 w-full"
        />
        <input
          type="password"
          placeholder="Email Address"
          className="p-2 my-4 w-full"
        />
        <button className="p-2 my-6 bg-red-700 w-full">Sign In</button>
      </form>
    </div>
  );
};

export default Login;
