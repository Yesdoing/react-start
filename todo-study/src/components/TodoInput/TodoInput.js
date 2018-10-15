import React from 'react';
import styles from './TodoInput.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const TodoInput = ({value, onChange, onInsert}) => {
    const handleKeyPress = (e) => {
        if(e.key === 'Enter') {
            onInsert();
        }
    };

    return (
        <div className={cx('todo-input')}>
            <p className={cx('add-p')}>What's next?</p>
            <div className={cx("add-form")}>
                <input onChange={onChange} value={value} onKeyPress={handleKeyPress} placeholder={"내일 오후 3시까지 우체국 가기"}/>
                <div className={cx('add-calendar')}></div>
                <div className={cx('add-button')} onClick={onInsert}>추가</div>
            </div>
        </div>
    )
}

export default TodoInput;