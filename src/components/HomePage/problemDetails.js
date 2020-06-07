import React from "react";
import css from "./HomePage.module.css";

function ProblemDetails() {
  return (
    <div className={css.infoDiv}>
      <h1 className={css.bounce_top}>Problem Solving</h1>
      <ul>
        <li className={css.infoLi}>Code Wars</li>
        <li className={css.infoLi}>Agile Working</li>
        <li className={css.infoLi}>Ongoing Projects</li>
        <li className={css.infoLi}>gitHub</li>
        <li className={css.infoLi}>AWS, Netlify and Heroku</li>
      </ul>
    </div>
  );
}

export default ProblemDetails;
