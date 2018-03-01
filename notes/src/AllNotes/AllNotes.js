import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import LeftBar from '../LeftBar/LeftBar';
import './AllNotes.css';

class AllNotes extends Component {
  getCSV = () => {
    let csv = [['title', 'body', 'id']];
    for (let i = 0; i < this.props.notes.length; i++) {
      csv.push([
        this.props.notes[i].title,
        this.props.notes[i].body,
        this.props.notes[i].id,
      ]);
    }
    return csv;
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
            <CSVLink
              className="export-button"
              data={this.getCSV()}
              filename="all-notes.csv"
            >
              Download CSV
            </CSVLink>
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
