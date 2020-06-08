import React from "react";
import css from "./HomePage.module.css";

function DesignDetails() {
  return (
    <div className={css.infoDiv}>
      <h1 className={css.bounce_top}>Designer</h1>
      <ul className={css.bounce_top}>
        <li className={css.infoLi}>CSS and CSS Grid</li>
        <li className={css.infoLi}>Flexbox and CSS Grids</li>
        <li className={css.infoLi}>@Media</li>
        <li className={css.infoLi}>@keyframes</li>
        <li className={css.infoLi}>Google Fonts</li>
        <li className={css.infoLi}>Figma</li>
      </ul>
    </div>
  );
}

export default DesignDetails;
