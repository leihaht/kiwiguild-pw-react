import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
//import { configureStore, history } from './store/configureStore';
//import Root from './containers/Root';

//const store = configureStore();

import App from './components/App';

//console.log(process.env.NODE_ENV);

const renderApp = Component => {
    render(
        <AppContainer>
            <Component />
        </AppContainer>,
        document.getElementById('root')
    );
}

renderApp(App);

if (module.hot) {
    module.hot.accept('./components/App', () => {
        renderApp(App);
    });
}
/*
render(
    <AppContainer>
        <Root store={store} history={history} />
    </AppContainer>,
    document.getElementById('root')
);

if (module.hot) {
    module.hot.accept('./containers/Root', () => {
        const newConfigureStore = require('./store/configureStore');
        const newStore = newConfigureStore.configureStore();
        const newHistory = newConfigureStore.history;
        const NewRoot = require('./containers/Root').default;
        render(
            <AppContainer>
                <NewRoot store={newStore} history={newHistory} />
            </AppContainer>,
            document.getElementById('root')
        );
    });
}
*/
