import React from 'react'
import { useSelector } from "react-redux"
import MovieList from "../BrowseMovies/MovieList"

const MovieSuggestion = () => {
  const { movieResults, movieNames } = useSelector((store) => store.gpt);

  if (!movieNames) return null;

  return (
    <div className='p-4 m-4 bg-black text-white text-lg bg-opacity-70'>
      {movieNames.map((movieName, index) => {
        return <MovieList className="absolute" key={movieName} title={movieName} movies={movieResults[index]} />
      })}
    </div>
  )
}

export default MovieSuggestion
