import React from "react";
import { useSelector } from "react-redux";

const MovieInfo = () => {
    const movieData = useSelector((store) => store.info.movieInfo)
    console.log('data..', movieData);
    if (!movieData) return null;

    return (
        <div>
            {movieData.title}
        </div>
    )
}

export default MovieInfo;