import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import appStore from './store/configureStore';

import App from './App';


const renderApp = Component => {
    render(
        <AppContainer>
            <BrowserRouter>
                <Provider store={appStore}>
                    <Component />
                </Provider>
            </BrowserRouter>
        </AppContainer>,
        document.getElementById('root')
    );
}

renderApp(App);

if (module.hot) {
    module.hot.accept('./App', () => {
        // to reload the page by require App again
        const NextApp = require('./App').default;
        renderApp(NextApp);
    });
}
