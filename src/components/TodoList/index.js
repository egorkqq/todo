import React from "react";
import TodoListItem from "./../TodoListItem/";

import "./TodoList.sass";

const TodoList = ({ todos, onDeleted }) => {
  const elements = todos.map(item => {
    const { id, ...itemProps } = item;

    return (
      <li key={id} className="list-group-item">
        <TodoListItem
          onDeleted={() => {
            onDeleted(id);
          }}
          {...itemProps}
        />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
