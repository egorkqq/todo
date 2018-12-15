import React, { Component } from "react";

import "./App.sass";

import SearchPanel from "./../SearchPanel/";
import AppHeader from "./../AppHeader/";
import TodoList from "./../TodoList/";
import ItemStatusFilter from "./../ItemStatusFilter/";
import AddItem from "./../AddItem/";

export default class App extends Component {
  maxId = 100;
  state = {
    todoData: [
      this.createTodoItem("Drink Coffee"),
      this.createTodoItem("Watch YouTube"),
      this.createTodoItem("Look away")
    ]
  };

  toggleProperty(arr, id, propName) {
    const index = arr.findIndex(el => el.id === id);
    const oldItem = arr[index];
    const newItem = { ...oldItem, [propName]: !oldItem[propName] };
    return [...arr.slice(0, index), newItem, ...arr.slice(index + 1)];
  }
  onToggleImportant = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "important")
      };
    });
  };
  onToggleDone = id => {
    this.setState(({ todoData }) => {
      return {
        todoData: this.toggleProperty(todoData, id, "done")
      };
    });
  };

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex(el => el.id === id);

      return {
        todoData: [...todoData.slice(0, index), ...todoData.slice(index + 1)]
      };
    });
  };
  createTodoItem(label) {
    return {
      label,
      important: false,
      done: false,
      visible: true,
      id: this.maxId++
    };
  }
  addItemToList = text => {
    const newItem = this.createTodoItem(text);
    this.setState(({ todoData }) => {
      return {
        todoData: [...todoData.slice(0), newItem]
      };
    });
  };

  onToggleAllStatus = () => {};
  onToggleActiveStatus = () => {};
  onToggleDoneStatus = () => {};

  render() {
    const { todoData } = this.state;
    const doneCount = todoData.filter(el => el.done).length;
    return (
      <div className="todo-app">
        <AppHeader toDo={todoData.length - doneCount} done={doneCount} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter
            onToggleAllStatus={this.onToggleAllStatus}
            onToggleActiveStatus={this.onToggleActiveStatus}
            onToggleDoneStatus={this.onToggleDoneStatus}
          />
        </div>
        <TodoList
          onToggleDone={this.onToggleDone}
          onToggleImportant={this.onToggleImportant}
          onDeleted={this.deleteItem}
          todos={todoData}
        />
        <AddItem onAddItem={this.addItemToList} className="top-panel d-flex" />
      </div>
    );
  }
}
