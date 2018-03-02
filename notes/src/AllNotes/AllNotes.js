import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import LeftBar from '../LeftBar/LeftBar';
import './AllNotes.css';

class AllNotes extends Component {
  state = {
    alphabetButtonPressed: false,
    timeButtonPressed: true,
  };
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

  orderByAlphabet = () => {
    let arr = [];
    this.props.notes.map(eachNote => {
      let eachArr = [];
      eachArr.push(eachNote.title, eachNote.body, eachNote.id);
      arr.push(eachArr);
    });
    arr.sort();
    return arr;
  };

  orderByTime = () => {
    let arr = [];
    this.props.notes.map(eachNote => {
      let eachArr = [];
      eachArr.push(eachNote.id, eachNote.title, eachNote.body);
      arr.push(eachArr);
    });
    arr.sort();
    let reOrderedArr = [];
    arr.map(eachNote => {
      let eachArr = [];
      eachArr.push(eachNote[1], eachNote[2], eachNote[0]);
      reOrderedArr.push(eachArr);
    });
    return reOrderedArr;
  };

  toggleAlphabetButton = () => {
    this.setState({
      alphabetButtonPressed: !this.state.alphabetButtonPressed,
      timeButtonPressed: !this.state.timeButtonPressed,
    });
  };

  toggleTimeButton = () => {
    this.setState({
      alphabetButtonPressed: !this.state.alphabetButtonPressed,
      timeButtonPressed: !this.state.timeButtonPressed,
    });
  };

  render() {
    if (this.state.alphabetButtonPressed) {
      let noteList = this.orderByAlphabet();
      return (
        <div className="container">
          <LeftBar />
          <div className="all-notes_body">
            <div className="all-notes_header">Your Notes:</div>
            <button
              className="order-button"
              onClick={this.toggleAlphabetButton}
            >
              Order By Time Created
            </button>
            <div className="all-notes_notes">
              {noteList.map((eachNote, i) => {
                const charsVisible =
                  eachNote[1].length < 105
                    ? eachNote[1]
                    : eachNote[1].slice(0, 105) + ' ...';
                return (
                  <div className="note-box" key={eachNote[2]}>
                    <Link to={`/notes/${eachNote[2]}`}>
                      <div className="note-title">{`${i + 1}. ${
                        eachNote[0]
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
    if (this.state.timeButtonPressed) {
      let noteList = this.orderByTime();

      return (
        <div className="container">
          <LeftBar />
          <div className="all-notes_body">
            <div className="all-notes_header">Your Notes:</div>
            <button
              className="order-button"
              onClick={this.toggleAlphabetButton}
            >
              Alphabetize
            </button>
            <div className="all-notes_notes">
              {noteList.map((eachNote, i) => {
                const charsVisible =
                  eachNote[1].length < 105
                    ? eachNote[1]
                    : eachNote[1].slice(0, 105) + ' ...';
                return (
                  <div className="note-box" key={eachNote[2]}>
                    <Link to={`/notes/${eachNote[2]}`}>
                      <div className="note-title">{`${i + 1}. ${
                        eachNote[0]
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
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, null)(AllNotes);
