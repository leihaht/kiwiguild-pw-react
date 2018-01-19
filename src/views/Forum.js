import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { KiwiForum } from '../components';
import classnames from 'classnames/bind';
import styles from 'flarum-style';

const cx = classnames.bind(styles);

const Forum = () => {
    return (
        <div className={cx('IndexPage')}>
            <header className="Hero WelcomeHero">
                <div className="container">
                    <button className="Hero-close Button Button--icon Button--link hasIcon" type="button"><i className="icon fa fa-times Button-icon"></i></button>
                    <div className="containerNarrow">
                        <h2 className="Hero-title">Welcome to the Flarum Community</h2>
                        <div className="Hero-subtitle">
                        Get support using and extending Flarum, the next-generation forum software that makes online discussion fun. New here? Please <a href="http://flarum.org/docs/faq">read the FAQ</a> before posting.
                        </div>
                    </div>
                </div>
            </header>
            <Switch>
                <Route path="/forum/t/:forum" component={KiwiForum} />
                <Route path="/forum" component={KiwiForum} />
            </Switch>
        </div>
    );
};

export default Forum;
