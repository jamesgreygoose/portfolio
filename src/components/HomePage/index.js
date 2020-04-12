import React, { useState } from "react";
import designerPic from "../../images/designer2.png";
import front from "../../images/front-end.png";
import back from "../../images/back-end.png";
import problem from "../../images/problem.png";
import screen from "../../images/screen.png";
import css from "./HomePage.module.css";
import ProblemDetails from "./problemDetails";
import FrontDetails from "./frontDetails";
import BackDetails from "./backDetails";
import DesignDetails from "./designDetails";
import StarterScreen from "./starterScreen";

function HomePage() {
  const [PSInfo, setPSInfo] = useState(false);
  const [frontInfo, setFrontInfo] = useState(false);
  const [backInfo, setBackInfo] = useState(false);
  const [designInfo, setDesignInfo] = useState(false);

  function renderProblemInfo() {
    setPSInfo(true);
    setFrontInfo(false);
    setBackInfo(false);
    setDesignInfo(false);
    console.log("Clicked render button");
  }

  function renderFrontInfo() {
    setPSInfo(false);
    setFrontInfo(true);
    setBackInfo(false);
    setDesignInfo(false);
    console.log("Clicked front button");
  }

  function renderBackInfo() {
    setPSInfo(false);
    setFrontInfo(false);
    setBackInfo(true);
    setDesignInfo(false);
    console.log("Clicked back button");
  }

  function renderDesignerInfo() {
    setPSInfo(false);
    setFrontInfo(false);
    setBackInfo(false);
    setDesignInfo(true);
    console.log("Clicked design button");
  }

  return (
    <main className={css.main}>
      <h1 className={css.heading}>James Greygoose</h1>
      <section className={css.section}>
        <div id={css.leftIcons}>
          <div className={css.iconsDiv}>
            <p id={css.designer}>Designer</p>
            <button onClick={() => renderDesignerInfo()}>
              <img src={designerPic} alt="James" />
            </button>
          </div>
          <div className={css.iconsDiv}>
            <p id={css.frontEnd}>Front End Developer</p>
            <button onClick={() => renderFrontInfo()}>
              <img src={front} alt="front-end" />
            </button>
          </div>
        </div>
        <div id={css.rightIcons}>
          <div className={css.iconsDiv}>
            <p>Back End Developer</p>
            <button onClick={() => renderBackInfo()}>
              <img className={css.backImage} src={back} alt="back-end" />
            </button>
          </div>
          <div>
            <p id={css.probSolve}>Problem Solver</p>
            <button onClick={() => renderProblemInfo()}>
              <img
                className={css.probImage}
                src={problem}
                alt="problem-solver"
              />
            </button>
          </div>
          <img src={screen} alt="screen" id={css.screen}></img>
        </div>
        <div className={css.details}>
          {PSInfo === false &&
          frontInfo === false &&
          backInfo === false &&
          designInfo === false ? (
            <StarterScreen />
          ) : null}
          {PSInfo && <ProblemDetails />}
          {frontInfo && <FrontDetails />}
          {backInfo && <BackDetails />}
          {designInfo && <DesignDetails />}
        </div>
      </section>
    </main>
  );
}

export default HomePage;
