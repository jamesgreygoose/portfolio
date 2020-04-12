import React from "react";
import css from "./App.module.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

import HomePage from "../HomePage";
import Projects from "../Projects";
import AboutMe from "../AboutMe";

function App() {
  return (
    <Router>
      <div>
        <ul>
          <li className={css.nav}>
            <Link to="/home">Home</Link>
          </li>
          <li className={css.nav}>
            <Link to="/about">About Me</Link>
          </li>
          <li className={css.nav}>
            <Link to="/projects">Projects</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/home">
            <HomePage />
          </Route>
          <Route path="/about">
            <AboutMe />
          </Route>
          <Route path="/projects">
            <Projects />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
