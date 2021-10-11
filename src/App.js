import React from "react";
import RadioInfo from "./components/RadioInfo/RadioInfo";
import classes from "./App.module.css";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import img4 from "./img/4.png";

const App = () => {
  return (
    <div className={classes.wrapper}>
      <RadioInfo img={img1} />
      <RadioInfo img={img2} />
      <RadioInfo img={img3} />
      <RadioInfo img={img4} />
    </div>
  );
};

export default App;
