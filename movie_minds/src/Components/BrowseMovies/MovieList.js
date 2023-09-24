import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({ title, movies }) => {
    return (
        <div className='px-4 overflow-x-hidden'>
            <h1 className='text-xl md:text-3xl py-2 md:py-4 text-white font-bold'>{title}</h1>
            <div className='flex hover:overflow-x-scroll overflow-x-hidden'>
                <div className='flex'>
                    {movies?.map((movie) => {
                        return <MovieCard key={movie.id} posterPath={movie.backdrop_path}/>
                    })
                    }
                </div>
            </div>
        </div>
    )
}

export default MovieList
