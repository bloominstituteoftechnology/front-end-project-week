import React, { Component } from 'react';
import './App.css';
import * as actions from './actions';
import Notes from  './components/Notes'
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';
import ViewNote from './components/ViewNote';

class App extends Component {
  componentDidMount = () => {
    this.props.fetchNotes();
  }

  render() {
    return (
      <div className="App">
        <div>
          <h1 className="App-title">Lambda Notes</h1>
          <Route 
            exact path="/"
            render={props => (
              <Notes 
                {...props} 
                notes={this.props.notes}
              />
            )}
          />
          <Route 
            path="notes/:id"
            render={props => (
              <ViewNote {...props} note={this.props.note} />
            )}
          />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
    note: state.note,
    fetchingNotes: state.fetchingNotes,
    fetchedNotes: state.fetchedNotes,
    viewingNote: state.fetchingNotes,
    viewNote: state.fetchedNotes,
    updatingNote: state.updatingNote,
    updatedNote: state.updatedNote,
    error: state.error
  }
}

export default withRouter(connect(mapStateToProps, actions)(App));