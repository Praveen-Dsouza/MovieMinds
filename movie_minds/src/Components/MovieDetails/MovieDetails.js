import React from "react";
import { useSelector } from "react-redux";
import { BG_URL } from "../../Utils/Constants/Constants";
import { useNavigate } from "react-router";
import back from "../../Utils/Icons/back.jpg";
import { useLocation } from "react-router-dom";
import MovieInfo from "./MovieInfo";
import MovieCredits from "./MovieCredits";

const MovieDetails = () => {
  const location = useLocation();
  const movieId = location.pathname.match(/\/info\/(\d+)/)[1];
  const navigate = useNavigate();
  const handleBackClick = () => navigate('/browse');
  const movieInfo = useSelector((store) => store.details.movieInfo);
  const movieCredits = useSelector((store) => store.details.movieCredits);

  if (!movieInfo && !movieCredits) {
    return null;
  }
  
  return (
    <div className="bg-gradient-to-tr from-black">
      <div className="w-full -z-10 fixed">
        <img
          className="h-screen object-cover bg-gradient from-black w-full"
          src={BG_URL}
          alt="gpt_search"
        />
      </div>
      <div className="px-6 md:px-10 pt-2 md:pt-4">
        <button
          className="font-bold text-white text-xl md:text-2xl"
          onClick={handleBackClick}
        >
          <img
            className="h-6 md:h-9 w-6 md:w-9"
            src={back}
            alt="back_icon"
            title="backToBrowse"
          />
        </button>
      </div>
      <MovieInfo movieId={movieId} />
      <MovieCredits movieId={movieId} />
    </div>
  );
};

export default MovieDetails;
