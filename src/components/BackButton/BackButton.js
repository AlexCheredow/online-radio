import { Link } from "react-router-dom";
import classes from "./BackButton.module.css";

const BackButton = () => {
  return (
    <div className={classes.alignButton}>
      <Link to="/" role="button">
        <div className={classes.BackButton} />
      </Link>
    </div>
  );
};

export default BackButton;
