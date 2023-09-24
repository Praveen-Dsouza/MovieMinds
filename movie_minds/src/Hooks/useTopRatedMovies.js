import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS, TMDB_MOVIE_URL } from '../Utils/Constants/Constants';
import { addTopRatedMovies } from '../Utils/StoreSlice/Movies';
import { GETTOPRATEDMOVIES } from '../Utils/ApiEndpoints';

const useTopRatedMovies = () => {
    const dispatch = useDispatch();
    const topRatedMovies = useSelector((store) => store.movies.topRatedMovies)
    
    useEffect(() => {
      if (!topRatedMovies)
        getTopRatedMovies();
    }, [])
    
    const getTopRatedMovies = async () => {
      const data = await fetch(`${TMDB_MOVIE_URL}/${GETTOPRATEDMOVIES}`, API_OPTIONS);
      const json = await data.json();
      dispatch(addTopRatedMovies(json.results));
    }
}

export default useTopRatedMovies;