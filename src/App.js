import React from "react";
import RadioInfo from "./components/RadioInfo/RadioInfo";
import classes from "./App.module.css";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import img4 from "./img/4.png";
import RADIOPROPS from "./lib/radioProps";

const App = () => {
  return (
    <div className={classes.wrapper}>
      <RadioInfo
        cover={img1}
        radioName={RADIOPROPS[0].radioName}
        arrayNumber={RADIOPROPS[0].arrayNumber}
        radioLink={RADIOPROPS[0].radioLink}
        link={RADIOPROPS[0].link}
      />
      <RadioInfo
        cover={img2}
        radioName={RADIOPROPS[1].radioName}
        arrayNumber={RADIOPROPS[1].arrayNumber}
        radioLink={RADIOPROPS[1].radioLink}
        link={RADIOPROPS[1].link}
      />
      <RadioInfo
        cover={img3}
        radioName={RADIOPROPS[2].radioName}
        arrayNumber={RADIOPROPS[2].arrayNumber}
        radioLink={RADIOPROPS[2].radioLink}
        link={RADIOPROPS[2].link}
      />
      <RadioInfo
        cover={img4}
        radioName={RADIOPROPS[3].radioName}
        arrayNumber={RADIOPROPS[3].arrayNumber}
        radioLink={RADIOPROPS[3].radioLink}
        link={RADIOPROPS[3].link}
      />
    </div>
  );
};

export default App;
