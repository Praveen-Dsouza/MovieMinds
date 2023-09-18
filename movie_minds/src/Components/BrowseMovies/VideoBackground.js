import React from 'react'
import { YT_URL } from '../../Utils/Constants'
import { useSelector } from 'react-redux'
import useMovieTrailer from '../../Hooks/useMovieTrailer'

const VideoBackground = ({ movieId }) => {
    const trailerVideo = useSelector((store) => store.movies?.trailerVideo)
    useMovieTrailer(movieId);
 
    return (
        <div className='w-full'>
            <iframe 
                className="w-full aspect-video"
                src={`${YT_URL}/${trailerVideo?.key}?&mute=1&autoplay=1&controls=0&showinfo=0&loop=1`} 
                title="YouTube video player" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            ></iframe>
        </div>
    )
}

export default VideoBackground;
