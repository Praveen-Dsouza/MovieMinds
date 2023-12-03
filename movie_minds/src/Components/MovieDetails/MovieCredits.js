import React, { useRef } from "react";
import useMovieCredits from "../../Hooks/useMovieCredits";
import { useSelector } from "react-redux";
import prevArrow from "../../Utils/Icons/prevArrow.png";
import nextArrow from "../../Utils/Icons/nextArrow.png";
import MovieCreditsCard from "./MovieCreditsCard";

const MovieCredits = ({ movieId }) => {
  useMovieCredits(movieId);
  const movieCredits = useSelector((store) => store.details.movieCredits);
  console.log("movieCredits", movieCredits);

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
    <div className="px-10 flex overflow-x-auto w-full">
      <button
        onClick={() => scrollCards("prev")}
        className="absolute left-0 p-4 h-1/2 bg-gradient-to-r from-black"
      >
        <img className="h-9 w-9 hover:bg-gray-400 hover:rounded-full hover:border-solid hover:border-2 hover:border-white ease-in-out hover:scale-125" src={prevArrow} alt="" />
      </button>
      <div ref={containerRef} className="flex overflow-x-auto">
        {movieCredits.cast?.map((item) => (
          <MovieCreditsCard key={item.id} credits={item} />
        ))}
      </div>
      <button
        onClick={() => scrollCards("next")}
        className="absolute right-0 p-4 h-1/2 bg-gradient-to-l from-black"
      >
        <img className="h-9 w-9 hover:rounded-full hover:border-solid hover:border-2 hover:border-white ease-in-out hover:scale-125" src={nextArrow} alt="" />
      </button>
    </div>
  );
};

export default MovieCredits;
