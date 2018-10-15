import React, { Component } from 'react';
import styles from './Navigation.scss';
import classNames from 'classnames/bind';
import sortImg from '../../assets/Sorting.png';

const cx = classNames.bind(styles);

class Navigation extends Component {
    render() {
        const { onFilter, onSort } = this.props;

        return (
            <div className={cx('todo-nav')}>
                <div className={cx('nav-buttons')}>
                    <div className={cx('nav-button')} onClick={onFilter}>ALL</div>
                    <div className={cx('nav-button')} onClick={onFilter}>TODO</div>
                    <div className={cx('nav-button')} onClick={onFilter}>DONE</div>
                </div>                
                <div className={cx('nav-sort')} onClick={onSort}>
                    <img src={sortImg} alt='sort' />
                </div>
            </div>
        );
    }
}

export default Navigation;