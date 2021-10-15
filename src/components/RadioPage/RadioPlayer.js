import React from "react";
import classes from "./RadioPage.module.css";

const RadioPlayer = (props) => {
  return (
    <div>
      <audio
        autoPlay="autoplay"
        controls="controls"
        src="https://hls-01-radiorecord.hostingradio.ru/record/playlist.m3u8"
      />
    </div>
  );
};
export default RadioPlayer;
