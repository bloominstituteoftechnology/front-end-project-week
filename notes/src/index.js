import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {createStore, applyMiddleware, compose} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
// import logger from 'redux-logger';

import App from './components/App';
import rootReducer from './reducers';

const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(thunk),
    )
);



ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
 document.getElementById('root')
 );
