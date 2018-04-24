import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom'
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { rootReducer } from './components/reducers/rootReducer';

const store = createStore(rootReducer);

ReactDOM.render(
    <Provider store={store}>
    <router>
        <App />
    </router>
    </Provider>,
    document.getElementById('root'));