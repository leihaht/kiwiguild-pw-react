import React, { Component } from 'react';
import classnames from 'classnames/bind';
import styles from 'flarum-style';
import icon from 'helpers/icon';

const cx = classnames.bind(styles);

const TerminalPost = ({replies, lastPost}) => (
    <li className={cx('item-terminalPost')}>
        <span>
            {(replies) ? icon('reply') : ''} <span className={cx('username')}>{lastPost.user.name} </span>
            {(replies) ? 'replied ' : 'started '}<time>a day ago</time>
        </span>
    </li>
);
export default TerminalPost;
