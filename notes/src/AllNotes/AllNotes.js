import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { CSVLink } from 'react-csv';
import LeftBar from '../LeftBar/LeftBar';
import { getNotes } from '../Redux/actions';
import './AllNotes.css';

class AllNotes extends Component {
  state = {
    alphabetButtonPressed: true,
    timeButtonPressed: false,
  };

  componentDidMount() {
    this.props.getNotes();
  }

  componentWillReceiveProps() {
    this.props.getNotes();
  }

  getCSV = () => {
    let csv = [['title', 'content', 'id']];
    for (let i = 0; i < this.props.notes.length; i++) {
      csv.push([
        this.props.notes[i].title,
        this.props.notes[i].content,
        this.props.notes[i].id,
      ]);
    }
    return csv;
  };

  orderByAlphabet = () => {
    return this.props.notes.sort((a, b) => {
      const aye = a.title.toUpperCase();
      const bee = b.title.toUpperCase();

      if (aye < bee) return -1;
      if (aye > bee) return 1;
      return 0;
    });
  };

  orderByTimeEdited = () => {
    let arr = [];
    this.props.notes.forEach(eachNote => {
      let eachArr = [];
      eachArr.push(eachNote.id, eachNote.title, eachNote.content);
      arr.push(eachArr);
    });
    arr.sort();
    let reOrderedArr = [];
    arr.forEach(eachNote => {
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
          <div className="all-notes_content">
            <div className="all-notes_header">Your Notes:</div>
            <button
              className="order-button"
              onClick={this.toggleAlphabetButton}
            >
              Order By Time Edited
            </button>
            <div className="all-notes_notes">
              {noteList.map((eachNote, i) => {
                if (eachNote.content === null) eachNote.content = '';
                const charsVisible =
                  eachNote.content.length < 105
                    ? eachNote.content
                    : eachNote.content.slice(0, 105) + ' ...';
                return (
                  <div className="note-box" key={eachNote.id}>
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
      let noteList = this.orderByTimeEdited();

      return (
        <div className="container">
          <LeftBar />
          <div className="all-notes_content">
            <div className="all-notes_header">Your Notes:</div>
            <button
              className="order-button"
              onClick={this.toggleAlphabetButton}
            >
              Alphabetize
            </button>
            <div className="all-notes_notes">
              {noteList.map((eachNote, i) => {
                if (eachNote[1] === null) eachNote[1] = '';
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
                      <div className="note-content">{charsVisible}</div>
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

export default connect(mapStateToProps, { getNotes })(AllNotes);
