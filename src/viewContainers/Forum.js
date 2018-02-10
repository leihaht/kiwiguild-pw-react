import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { KiwiForum } from '../components';
import ForumHeader from '../components/kiwi-forum/Components/ForumHeader';

import classnames from 'classnames/bind';
import styles from 'flarum-style';
const cx = classnames.bind(styles);

const Forum = ({ match }) => {
    return (
        <div className={cx('IndexPage')}>
            <ForumHeader />
            <Switch>
                <Route path={`${match.url}/t/:forum`} component={KiwiForum} />
                <Route path={match.url} component={KiwiForum} />
            </Switch>
        </div>
    );
};

export default Forum;
