import React, { Component } from 'react';
import styles from './TodoItem.scss';
import classNames from 'classnames/bind';
import checkIcon from '../../assets/check.png';

const cx = classNames.bind(styles);

class TodoItem extends Component {
    render() {
        const {done, children, onToggle, onRemove} = this.props;

        return (
            <div className={cx('todo-item')} onClick={onToggle}>
                <div className={cx('tick', {done})} data-set={done}>
                    <img src={checkIcon} alt='check'/>
                </div>
                <div className={cx('text', {done})}>
                    <p className={cx('todo-content')}>{children.content}</p>
                    <p className={cx('todo-date')}>{children.date}</p>
                </div>
                <div className={cx('delete', {done})} onClick={onRemove}>
                </div>
            </div>
        );
    }
}

export default TodoItem;