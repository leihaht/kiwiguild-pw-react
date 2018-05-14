import React, { Component } from 'react';
import { connect } from 'react-redux';

import classnames from 'classnames/bind';
import styles from 'flarum-style';
const cx = classnames.bind(styles);

import NewDiscussion from '../Components/Buttons/NewDiscussion';
import SideTags from '../Components/SideTags';

class SideNav extends Component {
    render() {
        const {
            tags,
            currentForum
        } = this.props;
        return (
            <nav className={cx('IndexPage-nav', 'sideNav')}>
                <ul>
                    <li className={cx('item-newDiscussion', 'App-primaryControl')}>
                        <NewDiscussion buttonLabel="Start a Discussion" />
                    </li>
                    <li className={cx('item-nav')}>
                        <SideTags tags={tags} currentForum={currentForum} more={true}/>
                    </li>
                </ul>
            </nav>
        );
    }
};

export default connect(
    (state) => ({
        tags: state.app.get('tags').toJS(),
        currentForum: state.app.get('currentForum'),
    }),
    null
)(SideNav);
