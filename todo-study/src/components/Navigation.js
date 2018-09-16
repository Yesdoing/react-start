import React, { Component } from "react";
import SortImg from "../assets/Sorting.png";
import "./Navigation.css";

class Navigaion extends Component {
  render() {
    return (
      <nav class="App-navigation">
        <div className="navSelectors">
          <a className="navSelector  selected" href="#">
            ALL
          </a>
          <a className="navSelector" href="#">
            TODO
          </a>
          <a className="navSelector" href="#">
            DONE
          </a>
        </div>
        <div className="navSortor">
          <a href="#">
            <img src={SortImg} alt="sort" />
          </a>
        </div>
      </nav>
    );
  }
}

export default Navigaion;
