import React, { Component } from 'react';
import NavBar from './NavBar/index';
import Notes from './Notes/index';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddNote from './AddNote/index';
import NotePreview from './NotePreview/index';
import { connect } from 'react-redux';

const Test = () => {
  return <div>route</div>;
}

class App extends Component {
  constructor(props) {
    super(props);



  }

  addNote() {

  }


  render() {

    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path='(/|/Notes/All)' component={Notes} />
          <Route exact path='/Notes/New' component={AddNote} />
          <Route exact path='/Notes/New/Preview' component={() => <NotePreview prevRoute='/Notes/New' note={this.props.newNote}/>} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    newNote: state.newNote,
  }
}

export default connect(mapStateToProps, null)(App);
