import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Container } from 'reactstrap';
import { KiwiForum } from '../components';


const Forum = () => {
    return (
        <Container>
            <Switch>
                <Route path="/forum/t/:forum" component={KiwiForum} />
                <Route path="/forum" component={KiwiForum} />
            </Switch>
        </Container>
    );
};

export default Forum;
