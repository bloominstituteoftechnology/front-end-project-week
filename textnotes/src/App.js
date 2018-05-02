import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, Link } from "react-router-dom";

import CreateContainer from './Components/CreateContainer';
import './App.css';
import NotesContainer from './Components/NotesContainer';
import { getNotes } from './Action';

class App extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    console.log("state", this.props.notes);
    return (
      <div className="container">
        <h1>Your Notes: </h1>
        <nav>
          <ul>
            {this.props.notes.map(note => {
                return(
                  <Link to={`/Note/${note.id}`}> 
                    <NotesContainer key={note.id} note={note}/>
                  </Link>
                ); 
            })}
          </ul>
        </nav>
    </div>
    );
  }
}

// mapStateToProps

const mapStateToProps = state => {
  return {
    loading: state.loading,
    notes: state.notes,
  }
}

export default connect(mapStateToProps, { getNotes })(App);
