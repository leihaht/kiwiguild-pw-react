import React from 'react';
import { Route } from 'react-router-dom';

import SingleDiscussion from '../components/kiwi-forum/Containers/SingleDiscussion';

const Discussion = () => {
    return (
        <Route path="/forum/d/:discussion" component={SingleDiscussion} />
    );
};

export default Discussion;
