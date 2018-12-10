import React, { Component } from 'react';
import { connect } from "react-redux";
import { fetchNotes } from "./Actions";

import Navigation from "./Components/Navigation/Navigation.js";
import NoteList from './Components/NoteList/NoteList.js';

import './App.css';


class App extends Component {

  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    return (
      <div className="App">
        <div className="home-container">
        <Navigation />
        <NoteList notes={this.props.notes}/>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes,
  fetchingNotes: state.fetchingNotes
})

export default connect(
  mapStateToProps,
  { fetchNotes }
)(App);

