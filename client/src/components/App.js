import React, { Component } from 'react';
import NavBar from './NavBar/index';
import Notes from './Notes/index';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import AddNote from './AddNote/index';
import NotePreview from './NotePreview/index';
import NoteView from './NoteView/index';
import EditNote from './EditNote/index';
import LoginModal from './LoginModal/index';
import { connect } from 'react-redux';

const Test = () => {
  return <div>route</div>;
}

class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path='(/|/Notes/All)' component={Notes} />
          <Route exact path='/Notes/New' component={AddNote} />
          <Route exact path='/Notes/Edit/:id' component={({match}) => <EditNote id={match.params.id} />} />
          <Route exact path='/Notes/New/Preview' component={() => <NotePreview prevRoute='/Notes/New' note={this.props.newNote}/>} />
          <Route exact path='/Notes/Edit/Preview/:id' component={({match}) => <NotePreview prevRoute={`/Notes/Edit/${match.params.id}`} note={this.props.editNote}/>} />
          <Route exact path='/Notes/View/:id' component={({match}) => <NoteView id={match.params.id} notes={ this.props.notes }/>} />
          { !this.props.loggedIn && <LoginModal />}
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {
    newNote: state.newNote,
    editNote: state.editNote,
    notes: state.notes,
    loggedIn: state.user.loggedIn,
  }
}

export default connect(mapStateToProps, null)(App);










































































































































































































console.log('Application created by Brandon G. Elzy');
