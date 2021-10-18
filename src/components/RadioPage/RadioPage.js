import React from "react";
import classes from "./RadioPage.module.css";
import RadioPlayer from "./RadioPlayer";
import ArtistSongInfo from "./ArtistSongInfo";
import Response from "./response";

const RadioPage = (props) => {
  return (
    <div className={classes.flexBox}>
      <div className={classes.wrapper}>
        <RadioPlayer />
        <ArtistSongInfo />
        <Response />
      </div>
    </div>
  );
};
export default RadioPage;
