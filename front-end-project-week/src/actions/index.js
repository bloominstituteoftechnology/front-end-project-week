import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';


const ADD_TODO = 'ADD_TODO {
DocumentType: ADD_TODO,
  NodeList: "Create Notelist"  
}

'
ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
