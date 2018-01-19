import React, {Component} from 'react';
import { Container } from 'reactstrap';
import ReactHtmlParser from 'react-html-parser';

import icon from 'helpers/icon';

import classnames from 'classnames/bind';
import styles from 'flarum-style';
const cx = classnames.bind(styles);

const PostBox = ({post}) => (
    <div className={cx('PostStream-item')}>
        <article className="Post undefined CommentPost">
            <div>
                <header className="Post-header">
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
                <div className="Post-body">
                    {ReactHtmlParser(post.body)}
                </div>
                <aside className="Post-actions">
                    <ul>
                        <li className="item-like"><button className="Button Button--link" type="button" title="Like"><span className="Button-label">Like</span></button></li>
                        <li className="item-reply"><button className="Button Button--link" type="button" title="Reply"><span className="Button-label">Reply</span></button></li>
                        <li>
                            <div className="ButtonGroup Dropdown dropdown Post-controls itemCount3">
                                <button className="Dropdown-toggle Button Button--icon Button--flat" data-toggle="dropdown">
                                    <i className="icon fa fa-ellipsis-h Button-icon"></i>
                                    <span className="Button-label"></span>
                                    <i className="icon fa fa-caret-down Button-caret"></i>
                                </button>
                                <ul className="Dropdown-menu dropdown-menu Dropdown-menu--right">
                                    <li className="item-edit">
                                        <button className=" hasIcon" type="button" title="Edit">
                                            <i className="icon fa fa-pencil Button-icon"></i>
                                            <span className="Button-label">Edit</span>
                                        </button>
                                    </li>
                                    <li className="Dropdown-separator"></li>
                                    <li className="item-hide">
                                        <button className=" hasIcon" type="button" title="Delete">
                                            <i className="icon fa fa-trash-o Button-icon"></i>
                                            <span className="Button-label">Delete</span>
                                        </button>
                                    </li>
                                </ul>
                            </div>
                        </li>
                    </ul>
                </aside>
                <footer className="Post-footer"><ul></ul></footer>
            </div>
        </article>
    </div>
);
export default PostBox;
