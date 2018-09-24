import React, { Component } from 'react';
import './App.css';
import { Button, H1, H2, H3 } from './components/StyledComponents';
import SideBar from './components/SideBar';
import { connect } from 'react-redux';
import { fetchNotes, addNewNote } from './actions';
import ListView from './components/ListView/ListView';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import NewNote from './components/CreateNote/NewNote';
import NoteView from './components/NoteView';

class App extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }
  render() {
    return (
      <div className="App">
        <div className="sideBar">
          <SideBar />
        </div>
        {this.props.notes ? (
          <div>
            <Route
              exact
              path="/"
              render={props => <ListView {...this.props} />}
            />
            <Route
              path="/newNote"
              render={props => <NewNote {...this.props} />}
            />
            <Route
              path="/notes/:id"
              render={props => <NoteView {...props} {...this.props} />}
            />
          </div>
        ) : (
          <H1>Loading</H1>
        )}
      </div>
    );
  }
}

function Home() {
  return (
    <div>
      <H1>Hello</H1>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    fetchingNotes: state.fetchingNotes
  };
};

export default connect(
  mapStateToProps,
  { fetchNotes, addNewNote }
)(App);
