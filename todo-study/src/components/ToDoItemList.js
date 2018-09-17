import React, { Component } from "react";
import "./ToDoItemList.css";
import ToDoItem from "./ToDoItem.js";

class ToDoItemList extends Component {
  render() {
    return (
      <main className="App-main">
        <ToDoItem />
      </main>
    );
  }
}

export default ToDoItemList;
