import React from "react";
import classes from "./RadioPage.module.css";
import RadioPlayer from "./RadioPlayer";
import ArtistSongInfo from "./ArtistSongInfo";

const RadioPage = (props) => {
  return (
    <div>
      <RadioPlayer />
      <ArtistSongInfo />
    </div>
  );
};
export default RadioPage;
