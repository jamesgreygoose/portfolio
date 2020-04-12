import React from "react";
import css from "./Projects.module.css";

function Projects() {
  function launchStopClock() {
    window.open(
      "https://github.com/jamesgreygoose/profileProjects/tree/master/stop-clock-jamesgreygoose"
    );
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
    <div className={css.wrapper}>
      <button className={css.launchStopClock} onClick={launchStopClock}>
        <p className={css.projectTitles}>Stop Clock</p>
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
  );
}

export default Projects;
