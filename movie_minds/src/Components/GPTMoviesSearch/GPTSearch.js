import React from 'react'
import SearchBar from './SearchBar'
import MovieSuggestion from './MovieSuggestion'
import { BG_URL } from '../../Utils/Constants/Constants'

const GPTSearch = () => {
  return (
    <div>
       <div className="w-full -z-10 fixed">
        <img
          className="h-screen object-cover bg-gradient from-black w-full"
          src={BG_URL}
          alt="gpt_search"
        />
      </div>
      <div className=''>
        <SearchBar/>
        <MovieSuggestion/>
      </div>
    </div>
  )
}

export default GPTSearch
