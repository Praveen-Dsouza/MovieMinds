import React from 'react'
import SearchBar from './SearchBar'
import MovieSuggestion from './MovieSuggestion'
import { BG_URL } from '../../Utils/Constants/Constants'

const GPTSearch = () => {
  return (
    <div>
       <div className="absolute w-full -z-10">
        <img
          className="bg-gradient from-black w-full"
          src={BG_URL}
          alt="login"
        />
      </div>
      <SearchBar/>
      <MovieSuggestion/>
    </div>
  )
}

export default GPTSearch
