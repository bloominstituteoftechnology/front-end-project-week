import React, { Component } from 'react';
import { connect } from "react-redux";
import { Route } from "react-router-dom"; 

import { fetchNotes } from "./Actions";
import Navigation from "./Components/Navigation/Navigation.js";
import NoteList from "./Components/NoteList/NoteList.js";
import NoteForm from "./Components/NoteForm/NoteForm.js"

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
        
        <Route 
        exact path="/"
        render={props => (
          <NoteList {...props} notes={this.props.notes}/>
        )}
        />
      
        <Route 
        path="/add-note"
        render={props => (
          <NoteForm {...props} />
        )}
        /> 
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

