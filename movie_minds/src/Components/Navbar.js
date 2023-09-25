import React, { useEffect } from "react";
import { auth } from "../Utils/Firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { addUser, removeUser } from "../Utils/StoreSlice/User";
import { clearGptMovieResults, toggleGptSearchView } from "../Utils/StoreSlice/GPT";
import { SUPPORTED_LANGUAGES } from "../Utils/Constants/Constants";
import { changeLanguage } from "../Utils/StoreSlice/Config";

const Navbar = () => {
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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

    // UnSubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((err) => {
        navigate("/error");
      });
  };

  const handleGptSearch = () => {
    dispatch(toggleGptSearchView())
    dispatch(clearGptMovieResults())
  }

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value))
  }

  return (
    <div className="absolute px-6 md:px-8 py-1 md:py-2 bg-gradient-to-b from-black z-10 w-full flex flex-col md:flex-row md:justify-between">
      <p className="text-[#B20710] font-bold text-2xl md:text-3xl mx-auto md:mx-0">MovieMinds</p>
      {user && (
        <div className="flex p-1 md:p-2 justify-between">
          {showGptSearch && <select className="px-2 my-1 bg-gray-900 text-white text-lg" onChange={handleLanguageChange}>
            {SUPPORTED_LANGUAGES.map((lang) => <option key={lang.identifier} value={lang.identifier}>{lang.name}</option>)}
          </select>}
          <button 
            className="p-1 px-2 md:px-3 mx-1 md:mx-2 my-1 font-semibold bg-purple-800 text-white rounded-lg text-lg md:text-xl"
            onClick={handleGptSearch}
            >{showGptSearch ? 'Home' : 'GPT Search'}
          </button>
          <img
            className="w-9 h-9 my-1 rounded-md"
            src={user?.photoURL}
            alt="user_icon"
          />
          <button
            onClick={handleSignOut}
            className="font-bold text-white text-xl md:text-2xl"
          >
            (Sign Out)
          </button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
