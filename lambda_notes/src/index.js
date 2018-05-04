import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import NoteListView from './Components/NoteListView'

ReactDOM.render(
<Router>
    <div>
    <App />
    
    </div>
    </Router>,
     document.getElementById('root'));
registerServiceWorker();
