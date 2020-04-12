import React from "react";
import css from "./HomePage.module.css";

function StarterScreen() {
  return (
    <div className={css.infoDiv}>
      <h1 id={css.starter} class={css.heartbeat}>
        Click on a button to see what I've been up to!
      </h1>
    </div>
  );
}

export default StarterScreen;
