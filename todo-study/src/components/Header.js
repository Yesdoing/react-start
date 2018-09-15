import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  render() {
    return (
      <header className="App-header">
        <div className="headerContent">
          <p className="headerSpan">YESTERDAY</p>
          <p className="headerSpan">YOU SAID</p>
          <p className="headerSpan highlight">TOMORROW!</p>
        </div>
      </header>
    );
  }
}

export default Header;
