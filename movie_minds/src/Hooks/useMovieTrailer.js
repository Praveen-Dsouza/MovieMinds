import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { GETMOVIETRAILER } from '../Utils/ApiEndpoints';
import { API_OPTIONS, TMDB_MOVIE_URL } from '../Utils/Constants';
import { addTrailerVideo } from '../Utils/StoreSlice/Movies';

const useMovieTrailer = ( movieId ) => {
    const dispatch = useDispatch();

    useEffect(() => {
        getMovieTrailer();
    }, [])

    //
    const getMovieTrailer = async () => {
        const data = await fetch(`${TMDB_MOVIE_URL}/${movieId}/${GETMOVIETRAILER}`, API_OPTIONS);
        const json = await data.json()
        const filterData = json.results?.filter((video) => video.type === 'Trailer')
        const trailer = filterData.length ? filterData[0]: json.results[0]
        dispatch(addTrailerVideo(trailer))
    }

    return (
        <div>
        
        </div>
    )
}

export default useMovieTrailer
