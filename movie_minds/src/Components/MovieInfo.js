import React from "react";
import { useSelector } from "react-redux";
import { TMDB_IMAGE_URL } from "../Utils/Constants/Constants";
import { BG_URL } from "../Utils/Constants/Constants";
import { useNavigate } from "react-router";
import back from "../Utils/Icons/back.jpg";

const MovieInfo = () => {
  const movieData = useSelector((store) => store.info.movieInfo);
  const navigate = useNavigate();
  const handleBackClick = () => navigate(-1);
  console.log("data..", movieData);
  
  // if (!movieData) {
  //   return null
  // }
  const { title, overview, poster_path, vote_average } = movieData;

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
      {movieData && (
        <div>
          {poster_path && (
            <div className="px-6 md:px-10 py-3 md:py-6">
              <img
                className="rounded-lg md:w-screen md:h-screen bg-blend-lighten"
                src={`${TMDB_IMAGE_URL}/${poster_path}`}
                alt=""
              />
            </div>
          )}
          <div className="px-6 md:px-10">
            <p className="text-red-500 text-3xl md:text-5xl font-bold">
              {title}
            </p>
          </div>
          <div className="text-white font-semibold text-xl md:text-3xl px-6 md:px-10 py-2 md:py-4">
            {overview}
          </div>
          {vote_average && (
            <div className="text-orange-300 font-medium px-6 md:px-10 pb-2 md:pb-4 text-xl md:text-2xl">
              Ratings: <span>&#9733;</span> {vote_average?.toFixed(1)}{" "}
            </div>
          )}
        </div>
      )}
        {/* (
        {!movieData.length && <div className="flex flex-col items-center justify-center h-screen">
          <h1 className="text-3xl md:text-5xl font-bold mb-1 md:mb-2 text-white">
            Oops Something went wrong!
          </h1>
        </div>}
    ); */}
    </div>
  );
};

export default MovieInfo;
