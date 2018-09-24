import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as actions from './actions';
import Notes from  './components/notes/Notes'
import { connect } from 'react-redux';
import { withRouter, Route } from 'react-router-dom';

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
            path="/"
            render={props => (
              <Notes 
                {...props} 
                notes={this.props.notes}
              />
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
    fetchingNotes: state.fetchingNotes,
    fetchedNotes: state.fetchedNotes,
    updatingNote: state.updatingNote,
    updatedNote: state.updatedNote,
    error: state.error
  }
}

export default withRouter(connect(mapStateToProps, actions)(App));