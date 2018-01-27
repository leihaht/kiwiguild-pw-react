import React, {Component} from 'react';

import icon from 'helpers/icon';

import classnames from 'classnames/bind';
import styles from 'flarum-style';
const cx = classnames.bind(styles);

const PostHead = ({post}) => (
    <header className={cx('Post-header')}>
        <ul>
            <li className="item-user">
                <div className="PostUser">
                    <span className={cx('UserOnline')}>{icon('circle')}</span>
                    <h3>
                        <a href="#">
                            <span className="Avatar PostUser-avatar">A</span> <span className={cx('username')}>{post.user.name}</span>
                        </a>
                    </h3>
                    <ul className="PostUser-badges badges">
                        <li className="item-group1">
                            <span className="Badge Badge--group--1 ">
                                {icon('wrench', {className: 'Badge-icon'})}
                            </span>
                        </li>
                    </ul>
                </div>
            </li>
            <li className="item-meta">
                <div className="Dropdown PostMeta">
                    <a className="Dropdown-toggle" data-toggle="dropdown">
                        <time>7 days ago</time>
                    </a>
                    <div className="Dropdown-menu dropdown-menu">
                        <span className="PostMeta-number">Post #1</span> <span className="PostMeta-time">
                            <time>Thursday, January 11, 2018 4:26 PM</time>
                        </span> <span className="PostMeta-ip">::1</span>
                        <input className="FormControl PostMeta-permalink" />
                    </div>
                </div>
            </li>
        </ul>
    </header>
);
export default PostHead;
