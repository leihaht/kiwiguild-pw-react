import React from 'react';
import { Route } from 'react-router-dom';

import { Home, Forum } from './views';
import { Header } from './components';

import 'font-awesome';

const App = () =>
        <div>
            <Header />
            <Route exact path="/" component={Home} />
            <Route path="/forum" component={Forum} />
        </div>
;

export default App;
