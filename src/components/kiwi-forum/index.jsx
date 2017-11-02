import React from 'react';
import { Provider } from 'react-redux';

// app store
import appStore from './store';

import AppContainer from './AppContainer';

const KiwiForum = () =>
    <Provider store={appStore}>
        <AppContainer />
    </Provider>
;

export default KiwiForum;
