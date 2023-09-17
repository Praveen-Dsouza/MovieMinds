import React, { useEffect } from "react";
import { auth } from "../Utils/Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../Utils/userSlice";

const Navbar = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        // Store user data in user slice
        dispatch(addUser({ uid, email, displayName, photoURL }));
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((err) => {
        navigate("/error");
      });
  };

  return (
    <div className="absolute px-8 py-2 bg-gradient-to-b from-black z-10 w-full flex justify-between">
      {/* <img 
        className='w-44'
        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJqVZ0gdHREsGU1GwHdUBnM1c3zI1qElOn9oicKQeuOMKL40vTKKj4wu0W5ZPKphZDh-M&usqp=CAU'
        alt="logo"/> */}
      <p className="text-[#B20710] font-bold text-3xl">MovieMinds</p>
      {user && (
        <div className="flex p-2">
          <img
            className="w-12 h-12 rounded-full"
            src={user?.photoURL}
            alt="user_icon"
          />
          <button onClick={handleSignOut} className="font-bold text-white">
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
