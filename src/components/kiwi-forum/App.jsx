import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container, Row, Col } from 'reactstrap';

// components
import SideNav from './Containers/SideNav';
import ForumFeed from './Containers/ForumFeed';

const App = (props) => (
    <Container>
        <SideNav />
        <ForumFeed />
    </Container>
);

export default App;
