import React, { useRef } from "react";
import lang from "../../Utils/Constants/LanguageConstants";
import { useDispatch, useSelector } from "react-redux";
import OpenAI from "../../Utils/OpenAI";
import { addGptMovieResults, gptSearchTrue } from "../../Utils/StoreSlice/GPT";
import SearchMovieTMDB from "../../Utils/SearchMovieTMDB";

const SearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const handleGPTSearchClick = async () => {
    const gptQuery = `Act as a Movie Recommendation system and suggest some movies for the query: ${searchText.current.value}. only give me names of 5 movies, comma seperated like the example result given ahead. Example Result: The Shawshank Redemption, The Godfather, The Dark Knight, Inception, The Matrix`; 
    const gptResults = await OpenAI.chat.completions.create({
      messages: [{ role: "user", content: gptQuery }],
      model: "gpt-3.5-turbo",
    });

    if (!gptResults.choices) {
      return;
    }

    /* Comma separted movies : 
       ["Some Like It Hot", 
       "Airplane!", 
       "Ghostbusters", 
       "Ferris Bueller's Day Off", 
       "Monty Python and the Holy Grail"]
    */
    const gptMovieList = gptResults.choices[0]?.message?.content.split(",");

    /** For Each gpt movies list i will search in TMDB API
     * It will return 5 promises since it async [Promise1, Promise2, Promise3, Promise4, Promise5]
     * It takes time to resolve
     */
    const promiseArray = gptMovieList.map((movie) => SearchMovieTMDB(movie));
    const tmdbResults = await Promise.all(promiseArray);

    dispatch(
      addGptMovieResults({
        movieNames: gptMovieList,
        movieResults: tmdbResults,
      })
    );
    dispatch(gptSearchTrue());
  };

  return (
    <div className="pt-[40%] md:p-0 md:pt-[10%] flex justify-center">
      <form
        className=" bg-black w-3/4 md:w-1/2 grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          type="search"
          className="px-2 md:px-4 py-0 md:py-1 m-2 md:m-4 col-span-9 rounded-md md:rounded-lg text-sm md:text-lg outline-none"
          placeholder={lang[langKey].gptSearchPlaceholder}
        />
        <button
          className="py-1 md:py-2 px-1 md:px-4 m-2 md:m-4 bg-red-700 hover:bg-red-600 hover:text-gray-300 text-white text-sm md:text-lg rounded-md md:rounded-lg col-span-3"
          onClick={handleGPTSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
