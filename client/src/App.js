import React, { Component, Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Notes, { NoteNew } from './components/Notes';
import SideBar from './components/SideBar';
// inside of APP, we want to render our sidebar and our NotesList component
class App extends Component {
  render() {
    return (
      <Fragment>
        <SideBar />
        <Route exact path="/" component={Notes} />
        <Route exact path="/notes/new" component={NoteNew} />
      </Fragment>
    );
  }
}

export default App;
