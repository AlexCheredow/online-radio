import React from "react";
import classes from "./RadioPage.module.css";
import RadioPlayer from "./RadioPlayer";
import Response from "./Response";
import BackButton from "../BackButton/BackButton";
import { useLocation } from "react-router-dom";

const RadioPage = () => {
  let location = useLocation();

  return (
    <div className={classes.height}>
      <BackButton />
      <div className={classes.flexBox}>
        <div className={classes.wrapper}>
          <RadioPlayer radioLink={location.state[1]} />
          <Response arrayNumber={location.state[0]} />
        </div>
      </div>
    </div>
  );
};
export default RadioPage;
