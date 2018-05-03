import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";

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
      <div className="createPage">
        <h3> Your Notes: </h3>
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
