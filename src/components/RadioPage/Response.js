import React, { useState, useEffect } from "react";
import axios from "axios";

import classes from "./RadioPage.module.css";

function Response(arrayNumber) {
  const [radioPage, setRadioPage] = useState({
    error: null,
    isLoaded: false,
    artist: null,
    song: null,
  });
  useEffect(() => {
    const intervalId = setInterval(() => {
      axios
        .get(
          `https://api.allorigins.win/get?url=${encodeURIComponent(
            "https://www.radiorecord.ru/api/stations/now/"
          )}`
        )
        .then((res) => {
          const result = JSON.parse(res.data.contents);
          const radioLink = result.result[arrayNumber.arrayNumber].track;
          const artist = radioLink.artist;
          const song = radioLink.song;
          setRadioPage({ isLoaded: true, artist, song });
        });
    }, 1000 * 5);
    return () => clearInterval(intervalId);
  }, [setRadioPage, arrayNumber]);
  // return (
  //   <div className={classes.signWrap1}>
  //     <div className={classes.sign_word}>artist name: {radioPage.artist}</div>
  //     <div className={classes.sign_word}>song name: {radioPage.song}</div>
  //   </div>
  // );
  if (radioPage.error) {
    return <p>Error {radioPage.error.message}</p>;
  } else if (!radioPage.isLoaded) {
    return (
      <div className={classes.signWrap1}>
        <div className={classes.sign_word}>
          <div className={classes.loadWrapp}>
            <div className={classes.load1}>
              <p>Loading </p>
              <div className={classes.line}></div>
              <div className={classes.line}></div>
              <div className={classes.line}></div>
            </div>
          </div>
        </div>
      </div>
    );
  } else {
    return (
      <div className={classes.signWrap1}>
        <div className={classes.sign_word}>artist name: {radioPage.artist}</div>
        <div className={classes.sign_word}>song name: {radioPage.song}</div>
      </div>
    );
  }
}

export default Response;
