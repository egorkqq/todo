import React, { Component } from "react";
import "./TodoListItem.sass";

export default class TodoListItem extends Component {
  state = {
    done: false
  };

  handleClick = () => {
    this.setState({
      done: this.state.done ? false : true
    });
  };

  render() {
    const { important, label } = this.props;
    const { done } = this.state;
    let classNames = "todo-list-item";
    if (done) {
      classNames += " done";
    }
    const style = {
      color: important ? "tomato" : "grey",
      fontWeight: important ? 800 : 400
    };
    return (
      <span className={classNames}>
        <span
          className="todo-list-item-label"
          style={style}
          onClick={this.handleClick}
        >
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
