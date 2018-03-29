import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

{/* <Router>
<div>
  <Router exact path="/" component={NewNote}/>
  <Router exact path="/movies/:id" component={MovieList}/>
</div>
</Router> */}