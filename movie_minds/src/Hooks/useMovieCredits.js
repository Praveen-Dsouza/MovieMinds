import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TMDB_MOVIE_URL } from "../Utils/Constants/Constants";
import { addMovieCredits } from "../Utils/StoreSlice/MovieDetails";
import { GETMOVIECREDITS } from "../Utils/ApiEndpoints";

const useMovieCredits = (movieId) => {
  const dispatch = useDispatch();
  const movieCredits = useSelector((store) => store.details.movieCredits);

  useEffect(() => {
    if (!movieCredits.length) getMovieCredits();
  }, []);

  const getMovieCredits = async () => {
    const data = await fetch(
      `${TMDB_MOVIE_URL}/${movieId}/${GETMOVIECREDITS}`,
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addMovieCredits(json));
  };
};

export default useMovieCredits;
