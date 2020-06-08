import React from "react";
import css from "./App.module.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import SideBar from "./Sidebar";

import HomePage from "../HomePage";
import Projects from "../Projects";
import AboutMe from "../AboutMe";
import HelloPage from "../helloPage";

function App() {
  return (
    <div id={css.App}>
      <SideBar />
      <Router>
        <Switch>
          <Route path="/hello">
            <HelloPage />
          </Route>
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
        {/* </div> */}
      </Router>
    </div>
  );
}

export default App;
