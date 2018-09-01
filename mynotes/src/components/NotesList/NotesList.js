import React, { Component } from "react";
import "./index.css";

class NotesList extends Component {
  render() {
    return (
      <div className="notesList_container">
        <div>
          <h3 className='content_header'>Your Notes:</h3>
        </div>
        <div className='notesList'>
          <div className="note">
            <div>
              <h4>Note Title</h4>
              <hr />
              <p>stuff</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default NotesList;
