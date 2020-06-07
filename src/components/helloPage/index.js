import React from "react";
import css from "./helloPage.module.css";
import helloPageJames from "../../images/hiImJames.png";

function HelloPage() {
  return (
    <div className={css.helloPage}>
      <h1 className={css.imJames}>Hello, I'm James. </h1>
      <img
        id={css.helloImJamesPic}
        src={helloPageJames}
        alt="hello, I'm James!"
      />
      <h3 className={css.clickAbove}>
        Click my face in the top corner to learn about what I've been up to!
      </h3>
    </div>
  );
}

export default HelloPage;
