import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { API_OPTIONS, TMDB_MOVIE_URL } from '../Utils/Constants';
import { addNowPlayingMovies } from '../Utils/StoreSlice/Movies';
import { GETNOWPLAYINGMOVIES } from '../Utils/ApiEndpoints';

const useNowPlayingMovies = () => {
    const dispatch = useDispatch();
    
    useEffect(() => {
      getNowPlayingMovies();
    }, [])
    
    const getNowPlayingMovies = async () => {
      const data = await fetch(`${TMDB_MOVIE_URL}/${GETNOWPLAYINGMOVIES}`, API_OPTIONS);
      const json = await data.json();
      dispatch(addNowPlayingMovies(json.results));
    }
}

export default useNowPlayingMovies;