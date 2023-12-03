import React from "react";
import { TMDB_IMAGE_URL } from "../../Utils/Constants/Constants";

const MovieCreditsCard = ({ credits }) => {
  const { profile_path, name, character } = credits;
  return (
    <div className="flex my-5 md:my-7 mr-5 md:mr-6">
      <div className="w-32 md:w-36">
        <img
          className="rounded-xl md:rounded-lg"
          src={`${TMDB_IMAGE_URL}${profile_path}`}
          alt=""
        />
        <p className="font-bold text-lg md:text-xl text-white py-2 md:py-2">{name}</p>
        <p className="font-semibold text-base md:text-lg text-white pb-1 md:pb-2">{character}</p>
      </div>
    </div>
  );
};

export default MovieCreditsCard;
