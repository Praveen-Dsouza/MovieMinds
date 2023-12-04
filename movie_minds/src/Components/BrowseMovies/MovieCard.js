import React from "react";
import { TMDB_IMAGE_URL } from "../../Utils/Constants/Constants";
import { useNavigate } from "react-router-dom";

const MovieCard = ({ posterPath, title, movieData, rating }) => {
  const navigate = useNavigate();
  if (!posterPath && !title) return null;

  const handleMovieClick = (movieId) => {
    navigate(`/info/${movieId}`);
  };

  return (
    <div>
      <div className="relative z-10 flex flex-row-reverse w-full">
        <p
          className={`absolute my-3 md:m-2 text-[10px] text-0 leading-3 md:text-xs rounded-xl md:rounded-md px-1 text-white inline-flex ${
            rating >= 6 ? "bg-green-500" : "bg-red-500"
          }`}
        >
          <span className="mr-[1px] md:mr-[2px]">&#9733;</span> {rating?.toFixed(1)}
        </p>
      </div>
      <div
        className="w-36 rounded-lg md:rounded-xl md:w-48 pr-2 md:pr-4 py-4 md:pb-6"
        onClick={() => handleMovieClick(movieData.id)}
      >
        <div className="relative cursor-pointer rounded-lg md:rounded-xl hover:border-solid hover:border-2 hover:border-white ease-in-out hover:scale-90">
          <p className="absolute rounded-lg md:rounded-xl text-[10px] leading-3 md:text-sm text-white bg-gradient-to-b from-black w-full px-1 md:px-2 py-1">
            {title}
          </p>
          <img
            className="rounded-lg md:rounded-xl"
            src={`${TMDB_IMAGE_URL}/${posterPath}`}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
