import { API_OPTIONS, TMDB_SEARCH_URL } from "./Constants/Constants";

const SearchMovieTMDB = async (movie) => {
  const data = await fetch(
    `${TMDB_SEARCH_URL}${movie}&include_adult=false&language=en-US&page=1`,
    API_OPTIONS
  );
  const json = await data.json();
  return json.results;
};

export default SearchMovieTMDB;
