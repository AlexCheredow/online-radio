import React from "react";
import RadioInfo from "./components/RadioInfo/RadioInfo";
import classes from "./App.module.css";
import img1 from "./img/1.png";
import img2 from "./img/2.png";
import img3 from "./img/3.png";
import img4 from "./img/4.png";
import RADIOPROPS from "./lib/radioProps";

const App = ({ arrayNumber }) => {
  console.log(RADIOPROPS);

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
      <RadioInfo cover={img3} radioName="другое радио" />
      <RadioInfo cover={img4} radioName="другое радио" />
    </div>
  );
};

export default App;
