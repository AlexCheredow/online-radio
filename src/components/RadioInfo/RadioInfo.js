import React from "react";
import classes from "./RadioInfo.module.css";
import { Link } from "react-router-dom";

const RadioInfo = ({ cover, link, radioName, arrayNumber, radioLink }) => {
  const state = [arrayNumber, radioLink];
  return (
    <div className={classes.bg}>
      <img
        src={cover}
        alt="backgroungImage"
        height="100%"
        width="100%"
        className={classes.img}
      />
      <div className={classes.signWrap1}>
        <button href="#" className={classes.sign_word}>
          <Link
            to={{
              pathname: `/RadioPage${link}`,
              state: state,
            }}
          >
            {radioName}
          </Link>
        </button>
      </div>
    </div>
  );
};
export default RadioInfo;
