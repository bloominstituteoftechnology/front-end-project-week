import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import rootReducer from './reducers';
import './index.css';
import App from './components/app/App';
import { BrowserRouter as Router } from 'react-router-dom';

// const store = createStore(rootReducer , applyMiddleware(thunk));

ReactDOM.render((

// <Provider store ={store}>
    <Router>
        <App />
    </Router>),
// </Provider>,

document.getElementById('root'));
// registerServiceWorker();
