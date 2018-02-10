import React, { Component } from 'react';

import icon from 'helpers/icon';

import classnames from 'classnames/bind';
import styles from 'flarum-style';
const cx = classnames.bind(styles);

const TagCloud = () => (
    <div className="TagCloud">
        <a className="TagLabel  colored" title="" href="/flarum-test/t/test">
            <span className="TagLabel-text">test</span>
        </a>
        <a className="TagLabel  colored" title="" href="/flarum-test/t/react">
            <span className="TagLabel-text">react</span>
        </a>
    </div>
);
export default TagCloud;
