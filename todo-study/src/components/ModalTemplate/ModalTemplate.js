import React, { Component } from 'react';
import styles from './ModalTemplate.scss';
import classNames from 'classnames/bind';

const cx = classNames.bind(styles);

class ModalTemplate extends Component {
    render() {
        const { children, modal, onOpenModal, onCloseModal } = this.props;
        return (
            <div className={cx('modal-template')}>
                <div className={cx('modal-open')} onClick={onOpenModal}>
                    <div className={cx('plus-icon')}></div>
                </div>
                { modal && (
                    <div className={cx('modal-content')}>
                        {children}
                        <div className={cx('modal-close')} onClick={onCloseModal}></div>
                    </div>
                    )
                }
            </div>
        );
    }
}

export default ModalTemplate;