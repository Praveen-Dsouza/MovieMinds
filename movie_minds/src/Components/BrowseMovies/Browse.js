import React from "react";
import Navbar from "../Navbar";
import useNowPlayingMovies from "../../Hooks/usePopularMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer"
import usePopularMovies from "../../Hooks/usePopularMovies";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Navbar />
      <MainContainer/>
      <SecondaryContainer/>
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
