import React from "react";
import css from "./HomePage.module.css";

function ProblemDetails() {
  return (
    <div className={css.infoDiv}>
      <h1 className={css.bounce_top}>Problem Solving</h1>
      <ul className={css.bounce_top}>
        <li className={css.infoLi}>Code Wars</li>
        <li className={css.infoLi}>Agile Working</li>
        <li className={css.infoLi}>Ongoing Projects</li>
        <li className={css.infoLi}>gitHub</li>
      </ul>
    </div>
  );
}

export default ProblemDetails;
