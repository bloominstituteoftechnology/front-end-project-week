import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import {createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import {logger} from 'redux-logger';
import rootReducer from './reducers/rootReducer';
import { BrowserRouter as Router } from 'react-router-dom';

const middleWare = applyMiddleware(thunk, logger);

const store = createStore(rootReducer, middleWare)

ReactDOM.render(
<Provider store={store}>
<Router>
<App />
</Router>
</Provider>
, document.getElementById('root'));
registerServiceWorker();
