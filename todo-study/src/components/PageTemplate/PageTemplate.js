import React from 'react';
import styles from './PageTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

const PageTemplate = ({children}) => {
        return (
            <div className={cx('page-template')}>
                <header className={cx('page-header')}>
                    <div className={cx('page-spans')}>
                        <p>YESTERDAY</p>
                        <p>YOU SAID</p>
                        <p>TOMORROW!</p>
                    </div>
                </header>
                <div className={cx('content')}>
                    {children}
                </div>
            </div>
    );
};

export default PageTemplate;