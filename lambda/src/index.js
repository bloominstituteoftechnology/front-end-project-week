import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { createStore } from 'redux';
import reducer from './Reducers';
import { Provider } from 'react-redux';

let store = createStore(reducer);

ReactDOM.render(
<Provider store={store}>
    <App />
</Provider>,
    document.getElementById('root')
);

