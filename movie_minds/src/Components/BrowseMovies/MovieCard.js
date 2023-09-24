import React from 'react'
import { TMDB_IMAGE_URL } from '../../Utils/Constants/Constants'

const MovieCard = ({ posterPath }) => {
  return (
    <div className='w-48 pr-4'>
      <img src={`${TMDB_IMAGE_URL}/${posterPath}`} alt=""/>
    </div>
  )
}

export default MovieCard
