import React from "react";
import TodoListItem from "./../TodoListItem/";

import "./TodoList.sass";

const TodoList = ({ todos, onDeleted, onToggleImportant, onToggleDone }) => {
  const elements = todos.map(item => {
    const { id, ...itemProps } = item;
    console.log(item.visibility);

    return (
      <li key={id} className={item.visibility ? "list-group-item" : " hide"}>
        <TodoListItem
          onDeleted={() => {
            onDeleted(id);
          }}
          onToggleDone={() => {
            onToggleDone(id);
          }}
          onToggleImportant={() => {
            onToggleImportant(id);
          }}
          {...itemProps}
        />
      </li>
    );
  });

  return <ul className="list-group todo-list">{elements}</ul>;
};

export default TodoList;
