import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';

import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router} from 'react-router-dom';

import rootReducer from './components/reducer/reducers'
const middelware = applyMiddleware(logger, thunk)

const store = createStore(rootReducer, middelware)

ReactDOM.render(
<Provider store={store}>
<Router>
<App />
</Router>
</Provider>, document.getElementById('root'));


