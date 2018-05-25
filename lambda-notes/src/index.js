import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import noteReducer from './JS/reducers/index-r';



const store = createStore(noteReducer);
console.log("initial state: ", store.getState());

store.subscribe(()=>{
    console.log(store.getState());
})

ReactDOM.render(<Provider store = {store}>
                <Router>
                    <Route path = '/' component = {App} />
                </Router>
                </Provider>
                , document.getElementById('root'));

