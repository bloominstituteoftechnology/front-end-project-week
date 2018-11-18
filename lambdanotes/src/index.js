import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom'
import './index.css';
import App from './App';
import NotesProvider, {NotesContext} from './contexts/NotesProvider'

ReactDOM.render(
    <Router>
    <NotesProvider>
        <NotesContext.Consumer>
            {data =>
                //Pass App the state data so that I can use it in ComponentDidMount
                    <App data={data} />
            }
        </NotesContext.Consumer>
    </NotesProvider>
    </Router>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
