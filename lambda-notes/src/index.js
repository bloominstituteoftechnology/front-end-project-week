import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {NotesReducer} from './reducer'; 

//Redux dependencies
import { createStore } from 'redux'; 
import { Provider } from 'react-redux'; 

//React Router 
import { BrowserRouter as Router } from 'react-router-dom'; 

const store = createStore(NotesReducer); 

ReactDOM.render( 
    
        <Provider store = {store}>
            <Router>
                <App />  
            </Router>
        </Provider>
    
    , document.getElementById('root'));

