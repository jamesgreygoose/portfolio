import React from "react";
import css from "./HomePage.module.css";

function BackDetails() {
  return (
    <div className={css.infoDiv}>
      <h1 className={css.bounce_top}>Back End</h1>
      <ul className={css.bounce_top}>
        <li className={css.infoLi}>Express Server</li>
        <li className={css.infoLi}>Postman</li>
        <li className={css.infoLi}>SQL</li>
        <li className={css.infoLi}>Postgres</li>
        <li className={css.infoLi}>APIs</li>
      </ul>
    </div>
  );
}

export default BackDetails;
