import React from "react";
import css from "./Projects.module.css";
import Twitter from "../../images/twitter icon.png";
import GitHub from "../../images/github icon.png";
import LinkedIn from "../../images/linked in.png";

function Projects() {
  function launchSOCWars() {
    window.open("https://github.com/jamesgreygoose/SOCWars");
  }

  function launchPokedex() {
    window.open(
      "https://github.com/jamesgreygoose/profileProjects/tree/master/pokedex-jamesgreygoose"
    );
  }

  function launchToDoList() {
    window.open(
      "https://github.com/jamesgreygoose/profileProjects/tree/master/todolist"
    );
  }

  function launchPokeDisplay() {
    window.open(
      "https://github.com/jamesgreygoose/profileProjects/tree/master/poke-display"
    );
  }

  function launchTree() {
    window.open(
      "https://github.com/jamesgreygoose/profileProjects/tree/master/WMCA%20Tree%20Project"
    );
  }

  function launchBenaroo() {
    window.open(
      "https://github.com/jamesgreygoose/profileProjects/tree/master/Benaroo"
    );
  }

  return (
    <>
      <h1 id={css.busy}>I've been quite busy!</h1>
      <h3 id={css.takeALook}>
        Why not have a look at a few of the projects that I have completed?
      </h3>
      <div className={css.wrapper}>
        <button className={css.launchSOCWars} onClick={launchSOCWars}>
          <p className={css.projectTitles}>SOC Wars</p>
        </button>
        <button className={css.launchPokedex} onClick={launchPokedex}>
          <p className={css.projectTitles}>Pokedex</p>
        </button>
        <button className={css.launchToDoList} onClick={launchToDoList}>
          <p className={css.projectTitles}>To Do List</p>
        </button>
        <button className={css.launchPokeDisplay} onClick={launchPokeDisplay}>
          <p className={css.projectTitles}>PokeMon Display</p>
        </button>
        <button className={css.launchTree} onClick={launchTree}>
          <p className={css.projectTitles}>WMCA Tree Project</p>
        </button>
        <button className={css.launchBenaroo} onClick={launchBenaroo}>
          <p className={css.projectTitles}>Benaroo Game</p>
        </button>
      </div>
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

export default Projects;
