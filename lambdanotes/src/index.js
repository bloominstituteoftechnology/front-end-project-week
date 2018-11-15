import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import NotesProvider, {NotesContext} from './contexts/NotesProvider'

ReactDOM.render(
    <NotesProvider>
        <NotesContext.Consumer>
            {data =>
                <App data={data} />
            }
        </NotesContext.Consumer>
    </NotesProvider>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
