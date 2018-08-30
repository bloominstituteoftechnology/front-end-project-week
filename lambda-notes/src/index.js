import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Provider} from 'react-redux';
import {createStore,applyMiddleware} from 'redux';
import notesReducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';


const store = createStore(notesReducer, applyMiddleware(thunk,logger))

ReactDOM.render(
<Provider store={store}>
<App />
</Provider>, 
document.getElementById('root'));

