import React, { Component } from "react";
import styles from "./TodoInput.scss";
import classNames from "classnames/bind";
import "react-dates/initialize";
import "react-dates/lib/css/_datepicker.css";
import './react_dates_overrides.css';
import { SingleDatePicker } from "react-dates";
import moment from "moment";



const cx = classNames.bind(styles);

class TodoInput extends Component {
  state = {
    focused: null,
    date: null
  };

  handleKeyPress(e) {
    if (e.key === "Enter") {
      this.props.onInsert(moment().format('YYYY-MM-DD'));
      this.props.onCloseModal();
    }
  }

  handleDateChange = date => {
    this.setState({ date });
  };

  render() {
    const { value, onChange, onInsert } = this.props;
    const { handleKeyPress } = this;
    return (
      <div className={cx("todo-input")}>
        <p className={cx("add-p")}>What's next?</p>
        <div className={cx("add-form")}>
          <input
            className={cx("add-form__input")}
            onChange={onChange}
            value={value}
            onKeyPress={handleKeyPress}
            placeholder={"내일 오후 3시까지 우체국 가기"}
          />
          <SingleDatePicker
            displayFormat="YYYY-MM-DD"
            monthFormat="YYYY. MM"
            weekDayFormat="ddd"
            numberOfMonths={1}
            horizontalMonthPadding={10}
            id="date"
            date={this.state.date}
            onDateChange={this.handleDateChange}
            focused={this.state.focused}
            onFocusChange={({ focused }) => this.setState({ focused })}
            openDirection="up"
            hideKeyboardShortcutsPanel={true}
          />
          <div
            className={cx("add-button")}
            onClick={e => {
              e.stopPropagation();
              if(this.state.date !== null) {
                const endDate = moment().format('YYYY-MM-DD', this.state.date);
                onInsert(endDate);
              }
            }}
          >
            추가
          </div>
        </div>
      </div>
    );
  }
}

export default TodoInput;
