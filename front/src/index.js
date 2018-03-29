import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter} from 'react-router-dom';
import CreateNote from './CreateNote';
import EditNote from './EditNote';
import Data from './Data';
ReactDOM.render(
   <BrowserRouter>
   <App />
   </BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
