import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from "react-router-dom";
import rootReducer from './reducers';

const middleware = applyMiddleware(thunk, logger);

const store = createStore(
  rootReducer,
  middleware
);

store.subscribe(() => {
    console.log(store.getState());
})

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);