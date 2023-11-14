import React from "react";
import { useSelector } from "react-redux";
import { TMDB_IMAGE_URL } from "../Utils/Constants/Constants";
import { BG_URL } from "../Utils/Constants/Constants";

const MovieInfo = () => {
  const movieData = useSelector((store) => store.info.movieInfo);
  console.log("data..", movieData);
  if (!movieData) return null;
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


      <div className="p-10">
        <img
          className="rounded-lg w-screen h-screen"
          src={`${TMDB_IMAGE_URL}/${poster_path}`}
          alt=""
        />
      </div>
      <div className="px-10">
        <p className="text-white text-3xl md:text-5xl font-bold">{title}</p>
      </div>
      <div className="text-white font-semibold text-xl md:text-3xl px-10 py-2 md:py-4">{overview}</div>
      <div className="text-white font-medium px-10 pb-4 text-xl md:text-2xl">Ratings: {vote_average.toFixed(1)}/10</div>
    </div>
  );
};

export default MovieInfo;
