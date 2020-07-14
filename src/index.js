import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NoteApp from './NoteApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<NoteApp />, document.getElementById('root'));
registerServiceWorker();
