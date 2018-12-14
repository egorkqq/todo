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
      { label: "Drink Coffee", important: false, id: 1 },
      { label: "Beat Yourself", important: true, id: 2 },
      { label: "Yankees go home", important: false, id: 3 }
    ]
  };

  deleteItem = id => {
    this.setState(({ todoData }) => {
      const index = todoData.findIndex(el => el.id === id);

      return {
        todoData: [...todoData.slice(0, index), ...todoData.slice(index + 1)]
      };
    });
  };
  addItemToList = text => {
    const newItem = {
      label: text,
      important: false,
      id: this.maxId++
    };
    this.setState(({ todoData }) => {
      return {
        todoData: [...todoData.slice(0), newItem]
      };
    });
  };

  render() {
    return (
      <div className="todo-app">
        <AppHeader toDo={1} done={3} />
        <div className="top-panel d-flex">
          <SearchPanel />
          <ItemStatusFilter />
        </div>
        <TodoList onDeleted={this.deleteItem} todos={this.state.todoData} />
        <AddItem onAddItem={this.addItemToList} className="top-panel d-flex" />
      </div>
    );
  }
}
