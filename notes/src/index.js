import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router-dom';

// REDUX --------------------------------------------------
// -Comment out the code between the lines to remove redux  
//  from the build.


// import thunk from 'redux-thunk';
// import logger from 'redux-logger';
// import { createStore, applyMiddleware } from 'redux';
// import { Provider } from 'react-redux';
// import rootReducer from './reducers';

// const store = createStore(rootReducer, applyMiddleware(thunk, logger))

// ReactDOM.render(
// <Provider store={store}>
//     <BrowserRouter>
//         <App />
//     </BrowserRouter>
// </Provider>, 
// document.getElementById('root'));


// ^REDUX^------------------------------------------------------
// -This code is without redux.


ReactDOM.render(
    <BrowserRouter>
        <App />
    </BrowserRouter>,
    document.getElementById('root')
);
