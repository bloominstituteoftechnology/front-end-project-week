import React from "react";
import ReactDOM from "react-dom"; // ---> the ReactDOM module exposes DOM-specific methods, allowing for rendering components in the DOM
import { BrowserRouter as Router } from "react-router-dom"; // ---> a <Router> that uses the HTML5 history API (pushState, replaceState and the popstate event) to keep UI in sync with the URL
import App from "./components/App"; 
import rootReducer from "./store/reducers"

import thunk from 'redux-thunk'; // --> this allows for asynchronous API calls using axios later on 
import { Provider } from 'react-redux'; // --> this allows the store to be accessible by all components 
import { createStore, applyMiddleware } from 'redux'; // --> this creates store and middleware 

import "./index.css";

const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>,
    document.getElementById('root')
);