import React from 'react'
import { YT_URL } from '../../Utils/Constants/Constants'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../../Hooks/useMovieTrailer'

const VideoBackground = ({ movieId, query }) => {
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo)
    useMovieTrailer(movieId);
 
    return (
        <div className='w-full'>
            <iframe 
                className="w-full aspect-video"
                src={`${YT_URL}/${trailerVideo?.key}?${query}`} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
            ></iframe>
        </div>
    )
}

export default VideoBackground;