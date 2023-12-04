import React, { useRef } from "react";
import useMovieCredits from "../../Hooks/useMovieCredits";
import { useSelector } from "react-redux";
import prevArrow from "../../Utils/Icons/prevArrow.png";
import nextArrow from "../../Utils/Icons/nextArrow.png";
import MovieCreditsCard from "./MovieCreditsCard";

const MovieCredits = ({ movieId }) => {
  useMovieCredits(movieId);
  const movieCredits = useSelector((store) => store.details.movieCredits);
  const containerRef = useRef(null);
  const { current } = containerRef;

  const scrollCards = (topic) => {
    const value = 120;
    if (current) {
      if (topic === "prev") {
        current.scrollLeft -= value;
      } else {
        current.scrollLeft += value;
      }
    }
  };

  return (
    <div className="px-6 md:px-10 flex overflow-x-hidden w-full">
      <button className="absolute left-0 p-2 md:p-4 h-1/3 md:h-1/2 bg-gradient-to-r from-black cursor-default">
        <div className="hover:bg-gray-400 hover:p-1 md:hover:p-2 hover:rounded-full">
          <img
            onClick={() => scrollCards("prev")}
            className="h-9 w-9 cursor-pointer hover:rounded-full hover:border-solid hover:border-2 hover:border-white ease-in-out hover:scale-125"
            src={prevArrow}
            alt=""
          />
        </div>
      </button>
      <div ref={containerRef} className="flex overflow-x-hidden">
        {movieCredits.cast?.map((item) => (
          <MovieCreditsCard key={item.order} credits={item} />
        ))}
      </div>
      <button className="absolute right-0 p-2 md:p-4 h-1/3 md:h-1/2 bg-gradient-to-l from-black cursor-default">
        <div className="hover:bg-gray-400 p-1 md:hover:p-2 hover:rounded-full">
          <img
            onClick={() => scrollCards("next")}
            className="h-9 w-9 cursor-pointer hover:bg-gray-400 hover:rounded-full hover:border-solid hover:border-2 hover:border-white ease-in-out hover:scale-125"
            src={nextArrow}
            alt=""
          />
        </div>
      </button>
    </div>
  );
};

export default MovieCredits;
