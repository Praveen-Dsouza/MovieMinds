import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS, TMDB_MOVIE_URL } from '../Utils/Constants/Constants';
import { addPopularMovies } from '../Utils/StoreSlice/Movies';
import { GETPOPULARMOVIES } from '../Utils/ApiEndpoints';

const usePopularMovies = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
      getPopularMovies();
    }, [])
    
    const getPopularMovies = async () => {
      const data = await fetch(`${TMDB_MOVIE_URL}/${GETPOPULARMOVIES}`, API_OPTIONS);
      const json = await data.json();
      dispatch(addPopularMovies(json.results));
    }
}

export default usePopularMovies;