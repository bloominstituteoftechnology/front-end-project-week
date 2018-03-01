import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LeftBar from '../LeftBar/LeftBar';
import './AllNotes.css';

class AllNotes extends Component {
  convertToCSV = () => {
    const title = this.state.note.title;
    const body = this.state.note.body;
    const id = this.state.note.id;

    const t = 'title';
    const b = 'body';
    const i = 'id';

    let result = {};

    return null;
  };

  render() {
    return (
      <div className="container">
        <LeftBar />
        <div className="all-notes_body">
          <div className="all-notes_header">Your Notes:</div>
          <div className="all-notes_notes">
            {this.props.notes.map((eachNote, i) => {
              const charsVisible =
                eachNote.body.length < 105
                  ? eachNote.body
                  : eachNote.body.slice(0, 105) + ' ...';
              return (
                <div className="note-box" key={eachNote.id}>
                  <Link to={`/notes/${eachNote.id}`}>
                    <div className="note-title">{`${i + 1}. ${
                      eachNote.title
                    }`}</div>
                    <div className="note-body">{charsVisible}</div>
                  </Link>
                </div>
              );
            })}
          </div>
          <div className="export-container">
            <button className="export-button">Export CSV</button>
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

export default connect(mapStateToProps, null)(AllNotes);
