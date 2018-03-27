import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import rootReducer from './reducers/notesReducer.js';
import { BrowserRouter as Router } from 'react-router-dom';


const store= createStore(rootReducer)

ReactDOM.render(
<Provider store={store}>
    <Router>
        <App />
    </Router>
</Provider>, 
document.getElementById('root')
);

