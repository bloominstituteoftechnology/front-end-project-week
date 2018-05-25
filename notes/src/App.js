import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { CreateNote, DisplayNotes, EditNote, ViewNote } from './components';
import axios from 'axios';
const URL = 'http://localhost:3333/notes'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }
  

  
  render() {
    return (
      <div className="App">
        <Route path="/createNote" component={CreateNote}></Route>
        <Route exact path="/" component={DisplayNotes}></Route>
        <Route path="/viewNote" component={ViewNote}></Route>
        <Route path="/editNote" component={EditNote}></Route>
      </div>
    );
  }
}

export default App;
