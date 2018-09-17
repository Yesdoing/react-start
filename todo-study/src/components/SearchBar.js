import React, { Component } from "react";
import xCircleImg from "../assets/x_circle.png";
import searchImg from "../assets/search_icon.png";
import "./SearchBar.css";

class SearchBar extends Component {
  render() {
    return (
      <div className="searchBar">
        <img className="searchIcon" src={searchImg} alt="search" />
        <input type="text" placeholder="Search for tasks" />
        <button>
          <img src={xCircleImg} alt="reset" />
        </button>
      </div>
    );
  }
}

export default SearchBar;
