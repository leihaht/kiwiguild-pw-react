import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import { appOperations } from './components/kiwi-forum/modules/app';

import classnames from 'classnames';

import { Home, Forum, Discussion } from './views';
import { Header } from './components';
import Composer from './components/kiwi-forum/Components/Composer';

import 'font-awesome';

class App extends Component {
    render () {
        const {rootclass} = this.props;
        return (
            <main className={classnames('App-content', rootclass)}>
                <Header />
                <div id="content" className="no-touch">
                    <Switch>
                        <Route exact path="/" component={Home} />
                        <Route path="/forum/d" component={Discussion} />
                        <Route path="/forum" component={Forum} />
                    </Switch>
                </div>
                <Composer />
            </main>
        );
    }
};

export default connect(
    (state) => ({
        rootclass: state.app.get('rootclass'),
    }),
)(App);
