import React from 'react';
import './ViewNote.css';
import { Link } from 'react-router-dom';

class ViewNote extends React.Component {


  render() {
    // console.log('you called NewNote from NoteList');
    return (
      <div className="newNoteDiv">
        <div className="leftBar">
          <div>
            <h1>Lambda</h1>
            <h2>Notes</h2>
            <button className="btns">
              <Link to="/">View Your Notes</Link>
            </button>
            <button className="btns">+ Create New Note:</button>
          </div>
        </div>
        <div className="rightBar">
          <div>
            <h3>Create New Note</h3>
          </div>
          {/* <div>
              <form onSubmit={this.noteTitleHandler}>
                <input className="titleForm" placeholder="Note Title"/>
              </form>
            </div>
            <div>
              <form onSubmit={this.noteContentHandler}>
                <input className="contentForm" placeholder="Note Content" />
              </form>
            </div> */}
          <div>
            <button type="submit" className="btns">
              Save
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default ViewNote;
