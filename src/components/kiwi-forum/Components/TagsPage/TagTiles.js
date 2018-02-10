import React, { Component } from 'react';

import icon from 'helpers/icon';

import classnames from 'classnames/bind';
import styles from 'flarum-style';
const cx = classnames.bind(styles);

const TagTiles = () => (
    <ul className="TagTiles">
        <li className="TagTile colored">
            <a className="TagTile-info" href="/flarum-test/t/general">
                <h3 className="TagTile-name">General</h3>
                <p className="TagTile-description"></p>
                <div className="TagTile-children">
                </div>
            </a>
            <a className="TagTile-lastDiscussion" href="/flarum-test/d/2-sort-test/3">
                <span className="TagTile-lastDiscussion-title">sort test</span>
                <time pubdate="true" title="Wednesday, January 17, 2018 10:45 AM" data-humantime="true">20 days ago</time>
            </a>
        </li>
        <li className="TagTile colored">
            <a className="TagTile-info" href="/flarum-test/t/westernu">
                <h3 className="TagTile-name">westernu</h3>
                <p className="TagTile-description"></p>
                <div className="TagTile-children"></div>
            </a>
            <span className="TagTile-lastDiscussion"></span>
        </li>
    </ul>
);
export default TagTiles;
