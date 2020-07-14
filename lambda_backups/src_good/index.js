import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Router} from 'react-router-dom';

export {default as NewNote} from './components/new-note.js';
export {default as ListNotes} from './components/listnotes.js';
export {default as Details} from './components/details.js';
export {default as EditNote} from './components/editnote';
export {default as DeleteNote} from './components/delete-note.js';

ReactDOM.render(<Router><App /></Router>, document.getElementById('root'));
