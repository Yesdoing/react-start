import React, { Component } from "react";
import Header from "./components/Header.js";
import Navigaion from "./components/Navigation.js";
import SearchBar from "./components/SearchBar.js";

import "./App.css";
import ToDoItemList from "./components/ToDoItemList.js";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Navigaion />
        <SearchBar />
        <ToDoItemList />
      </div>
    );
  }
}

export default App;
