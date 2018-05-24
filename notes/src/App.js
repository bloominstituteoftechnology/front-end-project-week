import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import { CreateNote, DisplayNotes, EditNote, ViewNote } from './components';

class App extends Component {
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
