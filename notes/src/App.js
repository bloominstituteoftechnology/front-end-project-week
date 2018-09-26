import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import NoteList from './components/NoteList';
import AddNote from './components/AddNote';
import ViewNote from './components/ViewNote';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to de Jungle</h1>
        </header>
        {(this.props.viewing) ? (
          <ViewNote index={this.props.index} />
        ) : (
          <div>
            <AddNote />
            <NoteList notes={this.props.notes} />
          </div>
        )}
      </div>
    );
  }
}

const mapDispatchtoProps = state =>({
  notes: state.notes,
  adding: state.adding,
  viewing: state.viewing,
  index: state.index
});

export default connect(mapDispatchtoProps)(App);
