import React from 'react';
import ReactDOM from 'react-dom';

import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import logger from "redux-logger";
import rootReducer from "./reducers";
import Root from './components/Root';

import registerServiceWorker from './registerServiceWorker';
import './index.css';

const store = createStore(
    rootReducer,
    applyMiddleware(logger, thunk)
);



ReactDOM.render(<Root store={store} />, document.getElementById('root'));
registerServiceWorker();
