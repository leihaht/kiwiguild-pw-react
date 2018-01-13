import React from 'react';
import classnames from 'classnames/bind';
import styles from 'flarum-style';
const cx = classnames.bind(styles);

import NewDiscussion from '../../Components/Buttons/NewDiscussion';
import SideTags from '../../Components/SideTags';

const SideNav = () => (
    <nav className={cx('IndexPage-nav', 'sideNav')}>
        <ul>
            <li className={cx('item-newDiscussion', 'App-primaryControl')}>
                <NewDiscussion buttonLabel="Start a Discussion" />
            </li>
            <li className={cx('item-nav')}>
                <SideTags />
            </li>
        </ul>
    </nav>
);

export default SideNav;
