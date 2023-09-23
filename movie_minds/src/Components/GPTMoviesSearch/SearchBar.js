import React from 'react'
import lang from '../../Utils/LanguageConstants'
import { useSelector } from 'react-redux'

const SearchBar = () => {
  const langKey = useSelector((store) => store.config.lang)

  return (
    <div className='pt-[10%] flex justify-center'>
      <form className=' bg-black w-1/2 grid grid-cols-12'>
        <input type='text' className='px-4 py-2 m-4 col-span-9 rounded-lg' placeholder={lang[langKey].gptSearchPlaceholder}/>
        <button className='py-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3'>{lang[langKey].search}</button>
      </form>
    </div>
  )
}

export default SearchBar
