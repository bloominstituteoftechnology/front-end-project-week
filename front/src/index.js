import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import ListView from './ListView';
import { BrowserRouter} from 'react-router-dom';
import CreateNote from './CreateNote';
import EditNote from './EditNote';
ReactDOM.render(
   <BrowserRouter>
   <App />
   </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
