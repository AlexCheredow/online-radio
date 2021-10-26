import React from "react";
import ReactHlsPlayer from "react-hls-player";
// import classes from "./RadioPage.module.css";

const RadioPlayer = (props) => {
  return (
    <ReactHlsPlayer
      src={props.link}
      autoPlay={true}
      controls={true}
      width="100%"
      height="50px"
    />
  );
};
export default RadioPlayer;
