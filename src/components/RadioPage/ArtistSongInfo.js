import React from "react";
import classes from "./RadioPage.module.css";

const ArtistSongInfo = (props) => {
  return (
    <div className={classes.signWrap1}>
      <div className={classes.sign_word}>artist name</div>
      <div className={classes.sign_word}>song name</div>
    </div>
  );
};
export default ArtistSongInfo;
