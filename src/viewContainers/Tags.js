import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { TagsContainer } from '../components';

import classnames from 'classnames/bind';
import styles from 'flarum-style';
const cx = classnames.bind(styles);

const Tags = () => {
    return (
        <TagsContainer />
    );
};

export default Tags;
