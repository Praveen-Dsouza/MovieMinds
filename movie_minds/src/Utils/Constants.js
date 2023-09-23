export const VALIDATION_REG_EX = {
  EMAIL: /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/,
  PASSWORD: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/,
};

export const USER_AVATAR =
  "https://occ-0-6247-2146.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABdpkabKqQAxyWzo6QW_ZnPz1IZLqlmNfK-t4L1VIeV1DY00JhLo_LMVFp936keDxj-V5UELAVJrU--iUUY2MaDxQSSO-0qw.png?r=e6e";

export const BG_URL =
  "https://assets.nflxext.com/ffe/siteui/vlv3/42df4e1f-bef6-499e-87ff-c990584de314/5e7c383c-1f88-4983-b4da-06e14c0984ba/IN-en-20230904-popsignuptwoweeks-perspective_alpha_website_large.jpg";

export const TMDB_MOVIE_URL = 'https://api.themoviedb.org/3/movie'

export const API_OPTIONS = {
  method: 'GET',
  headers: {
    accept: 'application/json',
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI3YTQ2YjczNDkxYzM0ODEwY2ZkZmU5YmNjYmI3YmMzNCIsInN1YiI6IjY1MDZhNGI0MTA5ZGVjMDBjYTA3MzQwOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.SaI3ReLkfkPebWJYXRLrRLaQdHwvbIcWL4TJz4zdAsU'
  }
};

export const YT_URL = 'https://www.youtube.com/embed'

export const TMDB_IMAGE_URL = 'https://image.tmdb.org/t/p/w780'

export const SUPPORTED_LANGUAGES = [
  {identifier: "en", name: "English"},
  {identifier: "hindi", name: "Hindi"},
  {identifier: "marathi", name: "Marathi"},
  {identifier: "spanish", name: "Spanish"}
]