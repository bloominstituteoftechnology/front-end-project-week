import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import SideBar from './sidebar';


class Notes extends Component {
  render() {
    return (
      <div className="container">
        <SideBar />
        <div className="viewNotesBody">
          <div className="header">Your Notes:</div>
          <div className="notes-div">
            {this.props.notes.map((note, i) => {
              return (
                <div className="note-card" key={note.id}>
                  <Link to={`/view-note/${note.id}`}>
                    <div className="note-title">{note.title} hi from individual note lin</div>
                    <div className="noteBody">{note.text}</div>
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

export default connect(mapStateToProps, null)(Notes);