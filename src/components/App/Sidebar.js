import React from "react";
import { slide as Menu } from "react-burger-menu";
import css from "./App.module.css";

export default (props) => {
  return (
    <>
      <div id={css.topMenu}></div>
      <Menu id={css.menu}>
        <a className={css.menuItem} href="/">
          Hello
        </a>

        <a className={css.menuItem} href="/about">
          About
        </a>

        <a className={css.menuItem} href="/home">
          Home
        </a>

        <a className={css.menuItem} href="/projects">
          Projects
        </a>
      </Menu>
    </>
  );
};
