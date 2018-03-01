import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SideBar from '../SideBar';
import '../styles/ViewNotes.css';

class AllNotes extends Component {
  render() {
    return (
      <div className="container">
        <SideBar />
        <div className="viewNotesBody">
          <div className="header">Your Notes:</div>
          <div className="allNotes">
            {this.props.notes.map((note, i) => {
              return (
                <div className="noteCard" key={note.id}>
                  <Link to={`/notes/viewnote/${note.id}`}>
                    <div className="noteTitle">{`${i + a}. ${note.title}`}</div>
                    <div className="noteBody">{note}</div>
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, null)(ViewNotes);