import React from "react";
import css from "./HomePage.module.css";

function StarterScreen() {
  return (
    <div className={css.infoDiv}>
      <h1 id={css.starter} class={css.heartbeat}>
        <br />
        Click on a button to see just <br />
        a few of the things
        <br /> I've been up to!
      </h1>
    </div>
  );
}

export default StarterScreen;
