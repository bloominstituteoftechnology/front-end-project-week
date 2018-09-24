import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { logger } from 'redux-logger';

import './index.css';
import App from './Components/App';
import { reducer } from './Store/Reducers';
import registerServiceWorker from './registerServiceWorker';

const reduxDevToolsHook = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const collection = createStore(reducer, compose(applyMiddleware(thunk, logger), reduxDevToolsHook));

ReactDOM.render(<Provider store={collection}><App /></Provider>, document.getElementById('root'));
registerServiceWorker();
