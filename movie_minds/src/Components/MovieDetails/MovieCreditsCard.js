import React from "react";
import { TMDB_IMAGE_URL } from "../../Utils/Constants/Constants";

const MovieCreditsCard = ({ credits }) => {
  const { profile_path, name, character } = credits;
  return (
    <div className="flex my-7 mr-6">
      <div className="w-36">
        <img
          className="rounded-lg"
          src={`${TMDB_IMAGE_URL}${profile_path}`}
          alt=""
        />
        <p className="font-bold text-xl text-white py-2">{name}</p>
        <p className="font-semibold text-lg text-white pb-2">{character}</p>
      </div>
    </div>
  );
};

export default MovieCreditsCard;
