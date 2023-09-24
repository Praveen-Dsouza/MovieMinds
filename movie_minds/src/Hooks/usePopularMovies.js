import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS, TMDB_MOVIE_URL } from '../Utils/Constants/Constants';
import { addPopularMovies } from '../Utils/StoreSlice/Movies';
import { GETPOPULARMOVIES } from '../Utils/ApiEndpoints';

const usePopularMovies = () => {
    const dispatch = useDispatch();
    const popularMovies = useSelector((store) => store.movies.popularMovies)
    
    useEffect(() => {
      if (!popularMovies)
        getPopularMovies();
    }, [])
    
    const getPopularMovies = async () => {
      const data = await fetch(`${TMDB_MOVIE_URL}/${GETPOPULARMOVIES}`, API_OPTIONS);
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    }
}

export default usePopularMovies;