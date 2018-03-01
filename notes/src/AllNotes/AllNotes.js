import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import LeftBar from '../LeftBar/LeftBar';
import './AllNotes.css';

class AllNotes extends Component {
  convertToCSV = () => {
    let csv = 'title,body,id\n';
    for (let i = 0; i < this.props.notes.length; i++) {
      csv += `${
        this.props.notes[i].title},${
        this.props.notes[i].body},${
        this.props.notes[i].id
      }\n`;
    }
    console.log('CSV: ', csv.slice(0, -2));
    return csv.slice(0, -2);
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
            <button onClick={this.convertToCSV} className="export-button">
              Export CSV
            </button>
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
