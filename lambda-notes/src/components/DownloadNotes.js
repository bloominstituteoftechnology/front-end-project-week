import React from 'react';
import { connect } from 'react-redux';

import './css/DownloadNotes.css';

class DownloadNotes extends React.Component {
  state = {
    show: false,
  };

  render() {
    return (
      <div className="download">
        {this.state.show ? (
          <h1 className="download-header">Your Notes Have Been Downloaded</h1>
        ) : (
          <div>
            <h1 className="download-header">Click To Download Your Notes</h1>
            <button onClick={this.handleDownload}> Download </button>
          </div>
        )}
      </div>
    );
  }
  handleDownload = () => {
    this.setState({ show: true });
    const newLine = '\n';
    let notesArray = [`data:text/csv;charset=utf-8,,Date,Title,Body${newLine}`];
    this.props.notes.forEach(note => {
      note = [
        note.dateString.replace(/,/g, ''),
        note.title.replace(/,/g, ''),
        note.body.replace(/,/g, '').concat(newLine),
      ];
      notesArray.push(note.join());
    });
    const filename = 'DownloadNotes.csv';
    console.log(notesArray);
    const data = encodeURI(notesArray);
    let link = document.createElement('a');
    link.setAttribute('href', data);
    link.setAttribute('download', filename);
    link.click();
  };
}

const mapStateToProps = state => {
  return {
    notes: state.currentUserNotes,
  };
};

export default connect(mapStateToProps, {})(DownloadNotes);
