import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GETMOVIETRAILER } from '../Utils/ApiEndpoints';
import { API_OPTIONS, TMDB_MOVIE_URL } from '../Utils/Constants/Constants';
import { addTrailerVideo } from '../Utils/StoreSlice/Movies';

const useMovieTrailer = ( movieId ) => {
    const dispatch = useDispatch();
    const trailerVideo = useSelector((store) => store.movies.trailerVideo)

    useEffect(() => {
        // if (!trailerVideo)
            getMovieTrailer();
    }, [])

    const getMovieTrailer = async () => {
        const data = await fetch(`${TMDB_MOVIE_URL}/${movieId}/${GETMOVIETRAILER}`, API_OPTIONS);
        const json = await data.json()
        const filterData = json.results?.filter((video) => video.type === 'Trailer')
        const trailer = filterData.length ? filterData[0]: json.results[0]
        dispatch(addTrailerVideo(trailer))
    }
}

export default useMovieTrailer
