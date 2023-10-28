import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, TMDB_MOVIE_URL } from "../Utils/Constants/Constants";
import { addNowPlayingMovies } from "../Utils/StoreSlice/Movies";
import { GETNOWPLAYINGMOVIES } from "../Utils/ApiEndpoints";

const useNowPlayingMovies = () => {
  const dispatch = useDispatch();
  const nowPlayingMovies = useSelector((store) => store.movies.nowPlayingMovies);

  useEffect(() => {
    if (!nowPlayingMovies)
      getNowPlayingMovies();
  }, []);

  const getNowPlayingMovies = async () => {
    const data = await fetch(
      `${TMDB_MOVIE_URL}/${GETNOWPLAYINGMOVIES}`,
      API_OPTIONS
    );
    const json = await data.json();
    console.log('now playing movies', json.results)
    dispatch(addNowPlayingMovies(json.results));
  };
};

export default useNowPlayingMovies;
