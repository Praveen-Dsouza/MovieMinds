import React from 'react'
import { useSelector } from 'react-redux'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import Shimmer from '../Shimmer';
import { YT_VIDEO_TRAILER_QUERY } from '../../Utils/Constants/Constants';

const MainContainer = () => {
    const movies = useSelector((store) => store.movies?.nowPlayingMovies);

    if (!movies) return <Shimmer/>;
    const mainMovie = movies[0]
    const { original_title, overview, id } = mainMovie

    return (
        <div className='pt-[30%] bg-black md:pt-0'>
            <VideoTitle title={original_title} description={overview} />
            <VideoBackground movieId={id} query={YT_VIDEO_TRAILER_QUERY} />
        </div>
    )
}

export default MainContainer
