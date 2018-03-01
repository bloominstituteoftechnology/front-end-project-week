import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import NoteList from './components/NoteList';
import NewNote from './components/NewNote';
import ViewNote from './components/ViewNote';
// import registerServiceWorker from './registerServiceWorker';



ReactDOM.render(
  <Router>
    <div>
      <Route path = "/" component={NoteList} exact></Route>
      <Route path = "/notes/:id" component={ViewNote}></Route>
      <Route path = "/newnote" component={NewNote}></Route>
    </div>
  </Router>, document.getElementById('root'));
  // registerServiceWorker();
