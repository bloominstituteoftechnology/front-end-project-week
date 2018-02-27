import React, { Component } from "react";
// import logo from "../styling/logo.svg";
import "../styling/App.css";
import { connect } from "react-redux";
import Notes from './Notes';
import NotesViewStyled from '../styling/NotesViewStyled';
import { addNote } from '../actions';

class App extends Component {
  state = {};

  render() {
    return (
      <NotesViewStyled>
        <div className="LeftBar">
          <h1>Lambda Notes</h1>
          <button>View Your Notes</button>
          <button>+ Create New Note</button>
        </div>
        <div className="MainView" > 
          <div className="header" />
          <h2>Your Notes:</h2>
          <div className="Notes">
            {this.props.notes.map(note => {
              return <Notes key={note.id} note={note}/>
            })}
          </div>
        </div>
      </NotesViewStyled>
    );
  }
}

//  <img src={logo} className="App-logo" alt="logo" />

const mapStateToProps = state => {
  return {
    notes: state
  };
};

export default connect(mapStateToProps, { addNote })(App);
