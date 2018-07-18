import { AppContainer } from 'react-hot-loader';
import { applyMiddleware, compose, createStore } from 'redux';
import { createBrowserHistory } from 'history';
import { routerMiddleware, connectRouter } from 'connected-react-router';
import { Provider } from 'react-redux';
import {BrowserRouter as Router} from 'react-router-dom';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import rootReducer from './reducers';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';

import './index.css';

const history = createBrowserHistory();

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
    connectRouter(history)(rootReducer),
    composeEnhancer(
        applyMiddleware(
            routerMiddleware(history),
            thunk,
            logger
        ),
    ),
);

const render = () => {
    ReactDOM.render(
        <AppContainer>
            <Provider store={store}>
                <App history={history} />
            </Provider>
        </AppContainer>,
        document.getElementById('root')
    );
};

render();

// Hot reloading
if(module.hot) {
    // Reload components
    module.hot.accept('./components/App', () => {
        render()
    });

    // Reload reducers
    module.hot.accept('./reducers', () => {
        store.replaceReducer(connectRouter(history)(rootReducer))
    });
}
