import React, { Component } from "react";
import "./TodoListItem.sass";

export default class TodoListItem extends Component {
  state = {};

  render() {
    const { important, label } = this.props;
    const style = {
      color: important ? "tomato" : "grey",
      fontWeight: important ? 800 : 400
    };
    return (
      <span className="todo-list-item">
        <span className="todo-list-item-label" style={style}>
          {label}
        </span>
        <span>
          <button className="btn btn-outline-success btn-sm">
            <i className="fa fa-exclamation" />
          </button>
          <button className="btn btn-outline-danger btn-sm">
            <i className="fa fa-trash-o" />
          </button>
        </span>
      </span>
    );
  }
}
