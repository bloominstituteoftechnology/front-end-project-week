import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
     import CommentBox from './NoteBox';


ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();






	ReactDOM.render(
	 <NoteBox />,
 	document.getElementById(‘root’)
	);