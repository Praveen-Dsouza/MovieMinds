import React from "react";
import { useSelector } from "react-redux";
import { TMDB_IMAGE_URL } from "../Utils/Constants/Constants";
import { BG_URL } from "../Utils/Constants/Constants";
import { useNavigate } from "react-router";
import back from "../Utils/Icons/back.jpg";
import useMovieInfo from "../Hooks/useMovieInfo";
import { useLocation } from "react-router-dom";
import moment from 'moment';

const MovieInfo = () => {
  const location = useLocation();
  const movieId = location.pathname.match(/\/info\/(\d+)/)[1];
  const navigate = useNavigate();
  const handleBackClick = () => navigate(-1);
  useMovieInfo(movieId);
  const movieData = useSelector((store) => store.info.movieInfo);
  console.log("data..", movieData);

  // if (!movieData) {
  //   return null
  // }

  const convertToHoursMinutes = (minutes) => {
    const duration = moment.duration(minutes, 'minutes');
    const hours = duration.hours();
    const minutesRemainder = duration.minutes();

    const hoursText = hours > 0 ? `${hours}hr` : '';
    const minutesText = minutesRemainder > 0 ? ` ${minutesRemainder}min` : '';

    return hoursText + minutesText;
  };

  const { title, release_date, genres, runtime, overview, poster_path, vote_average } =
    movieData;

  return (
    <div className="bg-gradient-to-tr from-black">
      <div className="w-full -z-10 fixed">
        <img
          className="h-screen object-cover bg-gradient from-black w-full"
          src={BG_URL}
          alt="gpt_search"
        />
      </div>
      <div className="px-6 md:px-10 pt-2 md:pt-4">
        <button
          className="font-bold text-white text-xl md:text-2xl"
          onClick={handleBackClick}
        >
          <img
            className="h-6 md:h-9 w-6 md:w-9"
            src={back}
            alt="back_icon"
            title="backToBrowse"
          />
        </button>
      </div>
      {movieData && (
        <div className="flex w-full">
          {poster_path && (
            <div className="pl-6 md:pl-10 w-1/3">
              <img
                className="rounded-lg md:w-screen md:h-screen bg-blend-lighten pb-4 md:pb-6"
                src={`${TMDB_IMAGE_URL}/${poster_path}`}
                alt=""
              />
            </div>
          )}
          <div className="w-2/3">
            <div className="px-6 md:px-10">
              <p className="text-white text-3xl md:text-5xl font-bold">
                {title}
              </p>
            </div>
            <div className="flex text-lg md:text-2xl px-6 md:px-10 text-gray-300 font-semibold">
              <p className="">{moment(release_date).format("DD/MM/YYYY")}</p>&nbsp;
              <p className="">
                •{genres?.map((item, index) => (
                  <span key={index}>{item.name}{index < genres.length - 1 && ', '}</span>
                ))}
              </p>&nbsp;
              <p>•{convertToHoursMinutes(runtime)}</p>
            </div>
            <div className="text-white font-semibold px-6 md:px-10 py-2 md:py-4">
              <p className="text-xl md:text-3xl">Overview:</p>
              <p className="text-base md:text-xl">{overview}</p>
            </div>
            {vote_average && (
              <div className="text-orange-300 font-medium px-6 md:px-10 pb-2 md:pb-4 text-xl md:text-2xl">
                Ratings: <span>&#9733;</span> {vote_average?.toFixed(1)}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default MovieInfo;
