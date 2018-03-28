// React and React Router
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router} from 'react-router-dom';

// Redux and Middleware
import { createStore, applyMiddleware, compose } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

// Styling
import './index.css';
import App from './App';

// Reducer
import rootReducer from "./reducers/rootReducer";

// Redux Dev Tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// Store
const middleware = composeEnhancers(applyMiddleware(logger, thunk));
const store = createStore(rootReducer, middleware);

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
, document.getElementById('root'));
