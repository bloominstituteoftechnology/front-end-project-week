import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, compose} from 'redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { notesReducer } from './reducers';
import 'bootstrap/dist/css/bootstrap.min.css';
import thunk from 'redux-thunk';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  notesReducer,
  composeEnhancers(applyMiddleware(thunk)),
);


ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>
    , document.getElementById('root'));


