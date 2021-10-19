import React from "react";
import classes from "./RadioPage.module.css";
import RadioPlayer from "./RadioPlayer";
import Response from "./Response";

const RadioPage = (props) => {
  return (
    <div className={classes.flexBox}>
      <div className={classes.wrapper}>
        <RadioPlayer />
        <Response />
      </div>
    </div>
  );
};
export default RadioPage;
