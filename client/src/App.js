import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './index.css';
import CreateNote from './CreateNote';
import EditNote from './EditNote';
import NoteList from './NoteList';
import SingleNoteView from './SingleNoteView';
import Sidebar from './Sidebar';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: []
    }

    this.handleChange = this.handleChange.bind(this);
  }
  render() {
    return (
      <div className="App">
        <Sidebar />
        <Switch>
          <Route exact path="/" component={NoteList}/>
          <Route exact path="/notes" component={NoteList} />
          <Route exact path="/notes/:id" component={SingleNoteView}/>
          <Route exact path="/create" component={CreateNote}/>
          <Route path="/notes/:id/edit" component={EditNote}/>
        </Switch>
      </div>
    );
  }
}

export default App;
