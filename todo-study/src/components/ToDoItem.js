import React, { Component } from "react";
import checkIcon from "../assets/check.png";
import removeBtnImg from "../assets/remove_btn.png";
import "./ToDoItem.css";

class ToDoItem extends Component {
  render() {
    return (
      <div>
        <div className="ToDoItemContents">
          <div className="ToDoChecker">
            <a href="#">
              <img className="ToDoCheckIcon" src={checkIcon} alt="checker" />
            </a>
          </div>
          <div className="ToDoContent">
            <div className="ToDoWhat">티티 간식주기</div>
            <div className="ToDoDate">2018-09-09 18:00 ~ 2018-09-09 19:00</div>
          </div>
          <div className="ToDoRemover">
            <a href="#" />
          </div>
        </div>
        <div className="ToDoItemContents checked">
          <div className="ToDoChecker">
            <a href="#">
              <img className="ToDoCheckIcon" src={checkIcon} alt="checker" />
            </a>
          </div>
          <div className="ToDoContent">
            <div className="ToDoWhat">티티 간식주기</div>
            <div className="ToDoDate">2018-09-09 18:00 ~ 2018-09-09 19:00</div>
          </div>
          <div className="ToDoRemover">
            <a href="#" />
          </div>
        </div>
      </div>
    );
  }
}

export default ToDoItem;
