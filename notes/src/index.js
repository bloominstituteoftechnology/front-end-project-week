import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Create from './components/Create';
import Delete from './component/Delete';
import Edit from './component/Edit';
import List from './component/list';
import Note from './component/Note';
import registerServiceWorker from './registerServiceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
