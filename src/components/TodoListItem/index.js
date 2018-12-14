import React, { Component } from "react";
import "./TodoListItem.sass";

export default class TodoListItem extends Component {
  state = {
    done: false,
    important: false
  };

  handleClick = () => {
    this.setState(state => {
      return { done: !state.done };
    });
  };
  changeImportant = () => {
    this.setState(state => {
      return { important: !state.important };
    });
  };

  render() {
    const { label, onDeleted } = this.props;
    const { done, important } = this.state;
    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }
    if (important) {
      classNames += " important";
    }
    return (
      <span className={classNames}>
        <span className="todo-list-item-label" onClick={this.handleClick}>
          {label}
        </span>
        <span>
          <button
            onClick={this.changeImportant}
            className="btn btn-outline-success btn-sm"
          >
            <i className="fa fa-exclamation" />
          </button>
          <button onClick={onDeleted} className="btn btn-outline-danger btn-sm">
            <i className="fa fa-trash-o" />
          </button>
        </span>
      </span>
    );
  }
}
