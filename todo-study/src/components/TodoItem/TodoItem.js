import React, { Component } from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';
import checkIcon from '../../assets/check.png';

const cx = classNames.bind(styles);

class TodoItem extends Component {
    render() {
        const {done, children, onToggle, onRemove} = this.props;
        const {text, date} = children;

        return (
            <div className={cx('todo-item')} onClick={onToggle}>
                <div className={cx('tick', {done})} data-set={done}>
                    <img src={checkIcon} alt='check'/>
                </div>
                <div className={cx('text', {done})}>
                    <p className={cx('todo-content')}>{text}</p>
                    <p className={cx('todo-date')}>{date}</p>
                </div>
                <div className={cx('delete', {done})} onClick={(e) => {
                    onRemove();
                    e.stopPropagation();
                    }
                }>
                </div>
            </div>
        );
    }
}

export default TodoItem;