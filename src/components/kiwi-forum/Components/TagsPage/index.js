import React, { Component } from 'react';

import icon from 'helpers/icon';

import classnames from 'classnames/bind';
import styles from 'flarum-style';
const cx = classnames.bind(styles);

import ForumHeader from '../ForumHeader';
import TagTiles from './TagTiles';
import TagCloud from './TagCloud';

// tag additional fields
// description
// color
// position
// parent_id
// discussions_count
// last_discussion_id

const TagsPage = () => (
    <div className={cx('TagsPage')}>
        <ForumHeader />
        <div className="container" >
            <nav className="TagsPage-nav IndexPage-nav sideNav">
                <ul>
                    <li className="item-newDiscussion App-primaryControl">
                        <button className="Button Button--primary IndexPage-newDiscussion hasIcon" itemclassname="App-primaryControl" type="button" title="Start a Discussion">
                            <i className="icon fa fa-edit Button-icon"></i>
                            <span className="Button-label">Start a Discussion</span>
                        </button>
                    </li>
                    <li className="item-nav">
                        <div className="ButtonGroup Dropdown dropdown App-titleControl Dropdown--select Dropdown--select itemCount3">
                            <button className="Dropdown-toggle Button" data-toggle="dropdown">
                                <span className="Button-label">Tags</span>
                                <i className="icon fa fa-sort Button-caret"></i>
                            </button>
                            <ul className="Dropdown-menu dropdown-menu ">
                                <li className="item-allDiscussions">
                                    <a href="/flarum-test/" active="false" className=" hasIcon" type="button" title="All Discussions">
                                        <i className="icon fa fa-comments-o Button-icon"></i>
                                        <span className="Button-label">All Discussions</span>
                                    </a>
                                </li>
                                <li className="item-following">
                                    <a href="/flarum-test/following" active="false" className=" hasIcon" type="button" title="Following">
                                        <i className="icon fa fa-star Button-icon"></i>
                                        <span className="Button-label">Following</span>
                                    </a>
                                </li>
                                <li className="item-tags active">
                                    <a href="/flarum-test/tags" active="true" className=" hasIcon" type="button" title="Tags">
                                        <i className="icon fa fa-th-large Button-icon"></i>
                                        <span className="Button-label">Tags</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </li>
                </ul>
            </nav>
            <div className="TagsPage-content sideNavOffset">
                <TagTiles />
                <TagCloud />
            </div>
        </div>
    </div>
);
export default TagsPage;
