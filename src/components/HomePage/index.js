import React, { useState } from "react";
import screen from "../../images/screen.png";
import css from "./HomePage.module.css";
import ProblemDetails from "./problemDetails";
import FrontDetails from "./frontDetails";
import BackDetails from "./backDetails";
import DesignDetails from "./designDetails";
import StarterScreen from "./starterScreen";
import Twitter from "../../images/twitter icon.png";
import GitHub from "../../images/github icon.png";
import LinkedIn from "../../images/linked in.png";

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
    <>
      <main className={css.main}>
        <section className={css.section}>
          <div id={css.leftIcons}>
            <div className={css.iconsDiv}>
              <button
                onClick={() => renderDesignerInfo()}
                id={css.designerButton}
              >
                <p className={css.skillsTitles}>DESIGNER</p>
              </button>
            </div>
            <div className={css.iconsDiv}>
              <button onClick={() => renderFrontInfo()} id={css.frontEndButton}>
                <p className={css.skillsTitles}>FRONT END</p>
              </button>
            </div>
          </div>
          <div id={css.rightIcons}>
            <div className={css.iconsDiv}>
              <button onClick={() => renderBackInfo()} id={css.backEndButton}>
                <p className={css.skillsTitles}>BACK END</p>
              </button>
            </div>
            <div>
              <button
                onClick={() => renderProblemInfo()}
                id={css.problemButton}
              >
                <p className={css.skillsTitles}>PROBLEM SOLVER</p>
              </button>
            </div>
            <img src={screen} alt="screen" id={css.screen}></img>
          </div>
          <div className={css.details}>
            {PSInfo === false &&
            frontInfo === false &&
            backInfo === false &&
            designInfo === false ? (
              <StarterScreen id={css.starterScreen} />
            ) : null}
            {PSInfo && <ProblemDetails id={css.problemDetails} />}
            {frontInfo && <FrontDetails />}
            {backInfo && <BackDetails />}
            {designInfo && <DesignDetails />}
          </div>
        </section>
      </main>
      <footer id={css.footer}>
        <div>© James Greygoose</div>

        <div id={css.socialIconsDiv}>
          <a href="https://github.com/jamesgreygoose" target="blank">
            <img
              className={css.socialImages}
              src={GitHub}
              alt="find me on GitHub"
              href="https://github.com/jamesgreygoose"
            ></img>
          </a>
          <a href="https://www.linkedin.com/in/jamesgreygoose/" target="blank">
            <img
              className={css.socialImages}
              src={LinkedIn}
              alt="find me on Linked In"
            ></img>
          </a>
          <a href="https://twitter.com/jamesgreygoose" target="blank">
            <img
              className={css.socialImages}
              src={Twitter}
              alt="find me on Twitter"
            ></img>
          </a>
        </div>
      </footer>
    </>
  );
}

export default HomePage;
