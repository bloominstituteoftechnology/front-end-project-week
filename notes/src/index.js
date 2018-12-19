

//== Index View ================================================================

//-- Dependencies --------------------------------
// Styles
import './utilities/reset.css';
import './index.css';
// React
import React from 'react';
import ReactDOM from 'react-dom';
// Router
import { BrowserRouter as Router } from 'react-router-dom';
// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// App Specific
import Client from './client.js';
import reducer from './reducers';

//-- Configure Data Store ------------------------
const store = createStore(
    reducer,
    applyMiddleware(thunk),
);

//-- Render View ---------------------------------
ReactDOM.render(
    <Provider store={store}>
        <Router>
            <Client />
        </Router>
    </Provider>,
    document.getElementById('root')
);
