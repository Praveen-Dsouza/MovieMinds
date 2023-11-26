import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../BrowseMovies/MovieList";
import Shimmer from "../Shimmer";

const MovieSuggestion = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);
  console.log("movie res", movieResults);
  const showGptMovies = useSelector((store) => store.gpt.showGptMovies);
  console.log(showGptMovies);

  if (!movieNames) return <div className="py-1 md:py-2 m-10 md:mx-48 bg-black font-semibold text-white text-lg md:text-xl bg-opacity-90 rounded-lg text-center">No Movies to show</div>;

  return (
    <div className="p-4 m-4 bg-black text-white text-lg bg-opacity-90 rounded-lg">
      {showGptMovies && !movieNames ? (
      <Shimmer />
    ) : (
      movieNames?.map((movieName, index) => (
        <MovieList
          className="absolute"
          key={movieName}
          title={movieName}
          movies={movieResults[index]}
        />
      ))
    )}
    </div>
  );
};

export default MovieSuggestion;
