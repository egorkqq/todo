import React, { Fragment } from "react";
import ReactDOM from "react-dom";

const el = (
  <React.Fragment>
    <h1 children="My Todo List" />
    <input type="text" placeholder="search" />
    <ul>
      <li>Learn React</li>
      <li>Build Awesome App</li>
    </ul>
  </React.Fragment>
);
ReactDOM.render(el, document.getElementById("root"));
