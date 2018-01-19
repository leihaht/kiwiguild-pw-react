import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Home, Forum, Discussion } from './views';
import { Header } from './components';

import 'font-awesome';

const App = () =>
        <div id="content" className="no-touch">
            <Header />
            <Switch>
                <Route exact path="/" component={Home} />
                <Route path="/forum/d" component={Discussion} />
                <Route path="/forum" component={Forum} />
            </Switch>
        </div>
;

export default App;
