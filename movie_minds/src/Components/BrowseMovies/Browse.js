import React from "react";
import Navbar from "../Navbar";
import useNowPlayingMovies from "../../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer"
import usePopularMovies from "../../Hooks/usePopularMovies";
import useTopRatedMovies from "../../Hooks/useTopRatedMovies";
import useUpcomingMovies from "../../Hooks/useUpcomingMovies";
import GPTSearch from "../GPTMoviesSearch/GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch)

  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  useUpcomingMovies();

  return (
    <div>
      <Navbar />
      {showGptSearch ? <GPTSearch/> :
        <>
        <MainContainer/>
        <SecondaryContainer/>
        </>
      }
      
      {/* 
        MainContainer
          - VideoBackgroound
          - VideoTitle
        Secondary Container
          - MovieList * n
            - cards * n
       */}
    </div>
  );
};

export default Browse;
