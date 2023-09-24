import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { API_OPTIONS, TMDB_MOVIE_URL } from '../Utils/Constants/Constants';
import { addUpcomingMovies } from '../Utils/StoreSlice/Movies';
import { GETUPCOMINGMOVIES } from '../Utils/ApiEndpoints';

const useUpcomingMovies = () => {
    const dispatch = useDispatch();
    const upcomingMovies = useSelector((store) => store.movies.upcomingMovies)

    useEffect(() => {
      if (!upcomingMovies)
        getUpcomingMovies();
    }, [])
    
    const getUpcomingMovies = async () => {
      const data = await fetch(`${TMDB_MOVIE_URL}/${GETUPCOMINGMOVIES}`, API_OPTIONS);
      const json = await data.json();
      dispatch(addUpcomingMovies(json.results));
    }
}

export default useUpcomingMovies;