import React from "react";
import classes from "./RadioPage.module.css";
import RadioPlayer from "./RadioPlayer";
import Response from "./Response";
import BackButton from "../BackButton/BackButton";

const RadioPage = (props) => {
  return (
    <div className={classes.height}>
      <BackButton />
      <div className={classes.flexBox}>
        <div className={classes.wrapper}>
          <RadioPlayer />
          <Response />
        </div>
      </div>
    </div>
  );
};
export default RadioPage;
