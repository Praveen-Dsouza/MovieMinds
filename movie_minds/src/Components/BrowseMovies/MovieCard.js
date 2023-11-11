import React from "react";
import { TMDB_IMAGE_URL } from "../../Utils/Constants/Constants";

const MovieCard = ({ posterPath, title }) => {
  if (!posterPath && !title) return null;

  return (
    <div className="w-36 md:w-48 pr-2 md:pr-4 py-4 md:pb-6">
      <div className="relative">
        <p className="absolute text-[10px] leading-3 md:text-sm text-white bg-gradient-to-b from-black w-full px-1 md:px-2 py-1">
          {title}
        </p>
        <img
          className="rounded-lg"
          src={`${TMDB_IMAGE_URL}/${posterPath}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default MovieCard;
