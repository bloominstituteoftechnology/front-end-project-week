import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import Notes from './components/Notes/Notes';
import EditNote from './components/EditNote/EditNote';
import CreateNewNote from './components/CreateNewNote/CreateNewNote';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
