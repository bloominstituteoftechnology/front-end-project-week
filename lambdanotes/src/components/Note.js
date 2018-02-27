import React from 'react';

import "./Note.css";

export default class Note extends React.Component {

  truncateNote = text => {
    if (text.length <= 110) {
      return text;
    } else {
      return text.slice(0, 110).concat('...');
    }
  };

  render() {
    return (
        <li className="Note">
          <div className="Note-NoteTitle">
            <h3>{this.props.title}</h3> <br />
          </div>
          <div className="Note-NoteBody">
            {this.truncateNote(this.props.body)} <br />
          </div>
        </li>
    );
  };
}
