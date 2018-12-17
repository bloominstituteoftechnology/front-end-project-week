import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import './App.css';
import './Notes.css';

import DeleteModal from './components/DeleteModal';
import EditNote from './components/EditNote';
import NewNotes from './components/NewNotes';
import Notes from './components/Notes';
import NoteView from './components/NoteView';

// import { Link } from 'react-router-native';

class App extends Component {
  constructor(props) { 
    super();
    this.state = {


    };
  }
  render() {
    return (
      <div className="App">
        <Route path='/' component={NewNotes} /> 
        <Route exact path="/editnote" component={EditNote} />
        <Route exact path="/notes" component={Notes} />
        <Route exact path="/noteview" component={NoteView} />

      </div>  

    );
  }
}

export default App;