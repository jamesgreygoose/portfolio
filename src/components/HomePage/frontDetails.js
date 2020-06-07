import React from "react";
import css from "./HomePage.module.css";

function FrontDetails() {
  return (
    <div className={css.infoDiv}>
      <h1 className={css.bounce_top}>Front End</h1>
      <ul className={css.bounce_top}>
        <li className={css.infoLi}>HTML</li>
        <li className={css.infoLi}>CSS</li>
        <li className={css.infoLi}>Javascript</li>
        <li className={css.infoLi}>React</li>
        <li className={css.infoLi}>DOM</li>
        <li className={css.infoLi}>Regex</li>
      </ul>
    </div>
  );
}

export default FrontDetails;
