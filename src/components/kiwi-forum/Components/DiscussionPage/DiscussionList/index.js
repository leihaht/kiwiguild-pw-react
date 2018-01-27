import React, {Component} from 'react';
import { Container } from 'reactstrap';

import classnames from 'classnames/bind';
import styles from 'flarum-style';
const cx = classnames.bind(styles);

import icon from 'helpers/icon';

const buttons = [
        {_id: 0, name: 'Follow', 'icon': 'star'},
        {_id: 1, name: 'separator'},
        {_id: 2, name: 'Rename', 'icon': 'pencil'},
        {_id: 3, name: 'Lock', 'icon': 'lock'},
        {_id: 4, name: 'Sticky', 'icon': 'thumb-tack'},
        {_id: 5, name: 'Edit Tags', 'icon': 'tag'},
        {_id: 6, name: 'separator'},
        {_id: 7, name: 'Delete', 'icon': 'trash-o'},
];

const DiscussionList = ({list}) => (
    <div className={cx('DiscussionPage-list')}>
        <div className="DiscussionList">
            <ul className="DiscussionList-discussions">
                <li data-id="2">
                    <div className="DiscussionListItem active">
                        <div className="ButtonGroup Dropdown dropdown DiscussionListItem-controls itemCount8">
                            <button className="Dropdown-toggle Button Button--icon Button--flat Slidable-underneath Slidable-underneath--right" data-toggle="dropdown">
                                <i className="icon fa fa-ellipsis-v Button-icon"></i>
                                <span className="Button-label"></span>
                                <i className="icon fa fa-caret-down Button-caret"></i>
                            </button>
                            <ul className="Dropdown-menu dropdown-menu ">
                                {buttons.map( btn => {
                                    if (btn.name === 'separator') return (<li key={btn._id} className="Dropdown-separator"></li>)
                                    return (
                                        <li key={btn._id}>
                                            <button className="hasIcon" type="button" title={btn.name}>
                                                {icon(btn.icon, {className: cx('Button-icon')})}
                                                <span className="Button-label">{btn.name}</span>
                                            </button>
                                        </li>
                                    )
                                })}
                            </ul>
                        </div>
                        <a className="Slidable-underneath Slidable-underneath--left Slidable-underneath--elastic disabled">
                            <i className="icon fa fa-check "></i>
                        </a>
                        <div className="DiscussionListItem-content Slidable-content read">
                            <a href="/flarum-test/u/admin" className="DiscussionListItem-author" title="" data-original-title="admin started 11 days ago">
                                <span className="Avatar ">A</span>
                            </a>
                            <ul className="DiscussionListItem-badges badges"></ul>
                            <a href="/flarum-test/d/2-sort-test/3" className="DiscussionListItem-main">
                                <h3 className="DiscussionListItem-title">sort test</h3>
                                <ul className="DiscussionListItem-info">
                                    <li className="item-tags">
                                        <span className="TagsLabel ">
                                            <span className="TagLabel  colored">
                                                <span className="TagLabel-text">General</span>
                                            </span>
                                            <span className="TagLabel  colored">
                                                <span className="TagLabel-text">TestTag</span>
                                            </span>
                                            <span className="TagLabel  colored">
                                                <span className="TagLabel-text">react</span>
                                            </span>
                                        </span>
                                    </li>
                                    <li className="item-terminalPost">
                                        <span>
                                            <i className="icon fa fa-reply "></i> <span className="username">admin</span> replied <time pubdate="true">5 days ago</time>
                                        </span>
                                    </li>
                                </ul>
                            </a>
                            <span className="DiscussionListItem-count" title="">1</span>
                        </div>
                    </div>
                </li>
            </ul>
            <div className="DiscussionList-loadMore"></div>
        </div>
    </div>
);
export default DiscussionList;
