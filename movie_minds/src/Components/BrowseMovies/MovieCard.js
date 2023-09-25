import React from "react";
import { TMDB_IMAGE_URL } from "../../Utils/Constants/Constants";

const MovieCard = ({ posterPath }) => {
  if (!posterPath) return null;

  return (
    <div className="w-36 md:w-48 pr-2 md:pr-4 py-4 md:pb-6">
      <img className="rounded-lg" src={`${TMDB_IMAGE_URL}/${posterPath}`} alt="" />
    </div>
  );
};

export default MovieCard;
