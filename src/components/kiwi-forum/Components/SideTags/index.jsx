import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import classnames from 'classnames/bind';
import styles from 'flarum-style';
const cx = classnames.bind(styles);



const SideTags = ({ tags, currentForum, more }) => (
    <div className={cx('ButtonGroup', 'Dropdown', 'dropdown', 'App-titleControl', 'Dropdown--select', 'itemCount15')}>
        <ul className={cx('Dropdown-menu', 'dropdown-menu')}>
            <li className={cx('item-allDiscussions', {active: (currentForum === "") ? true : false})}>
                <NavLink
                    className={cx('hasIcon')}
                    to="/forum/"
                    type="button"
                    title="All Discussions"
                >
                        <i className={cx('icon', 'fa', 'fa-comments-o', 'Button-icon')}></i><span className={cx('Button-label')}>All Discussions</span>
                    </NavLink>
            </li>
            <li className={cx('item-tags')}>
                <a href="/forum/tags"
                    active="false"
                    className={cx('hasIcon')}
                    type="button"
                    title="Tags">
                        <i className={cx('icon', 'fa', 'fa-th-large', 'Button-icon')}></i><span className={cx('Button-label')}>Tags</span></a>
            </li>
            <li className={cx('Dropdown-separator')}></li>
            { tags.map( (t, index) => {
                return (
                    <li
                        key={index}
                        className={cx('item-tag', {active: (currentForum === t.tag_slug) ? true : false})}
                    >
                        <NavLink
                            className={cx('TagLinkButton', 'hasIcon', {child: t.isChild})}
                            to={'/forum/t/'+t.tag_slug}
                            title="Test out Flarum in this tag. Discussions in this tag will be deleted every so often.">
                                <span className={cx('icon', 'TagIcon', 'Button-icon')} style={{backgroundColor: '#'+t.tag_color}}></span>{t.tag_name}
                            </NavLink>
                    </li>
                );
            }) }
            { more && (
                <li className="item-moreTags">
                    <NavLink to='/forum/tags' title="More...">
                        <span className={cx('Button-label')}>More...</span>
                    </NavLink>
                </li>
            )}
        </ul>
    </div>
);

export default SideTags;
