// React Imports
import React from 'react';
import ReactDOM from 'react-dom';
// Redux Imports
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// Browser Router Imports
import { BrowserRouter } from 'react-router-dom';
// Reducers Imports Here
import Reducers from './reducers';
// Component Imports
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';

const store = createStore(Reducers);

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
    , document.getElementById('root'));
registerServiceWorker();
