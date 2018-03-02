import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import './index.css';
import NoteList from './components/NoteList';
import CreateNote from './components/CreateNote';
import ViewNote from './components/ViewNote';
import EditNote from './components/EditNote';
import DeleteNote from './components/DeleteNote';
// import registerServiceWorker from './registerServiceWorker';


ReactDOM.render(
  <Router>
    <div>
      <Route path = "/" component={NoteList} exact></Route>
      <Route path = "/notes/:id" component={ViewNote}> exact </Route>
      <Route path = "/edit" component={EditNote} exact></Route>
      <Route path = "/createnote" component={CreateNote} exact></Route>
      <Route path = "/delete" component={DeleteNote} exact></Route>
    </div>
  </Router>, document.getElementById('root'));
  // registerServiceWorker();
