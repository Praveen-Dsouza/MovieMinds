import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    return (
        <div className='px-4 md:overflow-x-hidden'>
            <h1 className='text-xl md:text-3xl py-2 md:py-4 text-white font-bold'>{title}</h1>
            <div className='flex hover:overflow-x-auto overflow-x-hidden'>
                <div className='flex'>
                    {movies?.map((movie) => {
                        return <MovieCard key={movie.id} posterPath={movie.backdrop_path} title={movie.title} movieData={movie} />
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList
