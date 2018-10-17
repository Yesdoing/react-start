import React from 'react';
import styles from './TodoSearch.scss';
import classNames from 'classnames/bind';
import searchIcon from '../../assets/search_icon.png';
import resetIcon from '../../assets/x_circle.png';

const cx = classNames.bind(styles);

const TodoSearch = ({value, onChange, onSearch, onReset}) => {

    return (
        <div className={cx('todo-input')}>
            <img className={cx('search-icon')} src={searchIcon} alt='search' />
            <input onChange={onChange} value={value} placeholder='Search for tasks'/>
            <div className={cx('reset-button')} onClick={onReset}>
                <img src={resetIcon} alt='reset'/>
            </div>
        </div>
    );
};

export default TodoSearch;
