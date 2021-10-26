import React from "react";
import classes from "./RadioPage.module.css";
import RadioPlayer from "./RadioPlayer";
import Response from "./Response";
import BackButton from "../BackButton/BackButton";

const RadioPage = (props) => {
  const props1 = props.location.propsSearch.props.arrayNumber;
  const props2 = props.location.propsSearch.props.radioLink;
  return (
    <div className={classes.height}>
      <BackButton />
      <div className={classes.flexBox}>
        <div className={classes.wrapper}>
          <RadioPlayer link={props2} />
          <Response arrayNumber={props1} />
        </div>
      </div>
    </div>
  );
};
export default RadioPage;
