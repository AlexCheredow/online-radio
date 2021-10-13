import React from "react";
import classes from "./RadioInfo.module.css";

const RadioInfo = (props) => {
  return (
    <div className={classes.bg}>
      <img
        src={props.items.icon}
        alt="backgroungImage"
        height="100%"
        width="100%"
        className={classes.img}
      />
      <div className={classes.signWrap1}>
        <button href="#" className={classes.sign_word}>
          название станции{" "}
        </button>
      </div>
    </div>
  );
};
export default RadioInfo;
