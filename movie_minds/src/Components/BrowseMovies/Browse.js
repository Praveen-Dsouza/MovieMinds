import React from "react";
import Navbar from "../Navbar";
import useNowPlayingMovies from "../../Hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer"

const Browse = () => {
  useNowPlayingMovies();

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
