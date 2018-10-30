

//== Index View ================================================================

//-- Dependencies --------------------------------
import './index.css';
// React
import React from 'react';
import ReactDOM from 'react-dom';
// Redux
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
// App Specific
import App from './App';
import reducer from './reducers';

//-- Configure Data Store ------------------------
const store = createStore(
    reducer,
    applyMiddleware(thunk),
);

//-- Render View ---------------------------------
ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')
);
