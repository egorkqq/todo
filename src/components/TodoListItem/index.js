import React from "react";
import "./TodoListItem.sass";

const TodoListItem = ({ label, important = false }) => {
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
};

export default TodoListItem;
