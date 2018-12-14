import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const el = (
  <Fragment>
    <h1 children="My Todo List" />
    <input type="text" placeholder="search" />
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
    </ul>
  </Fragment>
);
ReactDOM.render(el, document.getElementById("root"));
