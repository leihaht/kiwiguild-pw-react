import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

// components
import SideNav from './Containers/SideNav';
import ForumFeed from './Containers/ForumFeed';

const App = (props) => (
    <Row>
        <Col sm="3">
            <SideNav />
        </Col>
        <Col sm="9">
            <Switch>
                <Route path="/forum/t/:forum" component={ForumFeed} />
                <Route path="/forum" component={ForumFeed} />
            </Switch>
        </Col>
    </Row>
);

export default App;
