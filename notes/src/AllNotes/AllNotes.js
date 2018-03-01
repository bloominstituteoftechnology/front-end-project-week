import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LeftBar from '../LeftBar/LeftBar';
import { getNotes } from '../Redux/actions';
import './AllNotes.css';

class AllNotes extends Component {
  componentDidMount() {
    this.props.getNotes();
  }

  render() {
    return (
      <div className="container">
        <LeftBar />
        <div className="all-notes_content">
          <div className="all-notes_header">Your Notes:</div>
          <div className="all-notes_notes">
            {this.props.notes.map((eachNote, i) => {
              let charsVisible;
              if (eachNote.content !== null) {
                charsVisible =
                  eachNote.content.length < 105
                    ? eachNote.content
                    : eachNote.content.slice(0, 105) + ' ...';
              } else {
                charsVisible = '';
              }
              return (
                <div className="note-box" key={i}>
                  <Link to={`/notes/${eachNote.id}`}>
                    <div className="note-title">{`${i + 1}. ${
                      eachNote.title
                    }`}</div>
                    <div className="note-content">{charsVisible}</div>
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

export default connect(mapStateToProps, { getNotes })(AllNotes);
