import React from 'react';
import ReactMarkdown from 'react-markdown';

import "./Note.css";

export default class Note extends React.Component {

  truncateNote = text => {
    const maxLength = 200;
    if (text.length <= maxLength) {
      return text;
    } else {
      return text.slice(0, maxLength).concat('...');
    }
  };

  render() {
    const displayText = this.truncateNote(this.props.body);
    return (
        <li className="Note">
          <div className="Note-NoteTitle">
            <h2>{this.props.title}</h2> <br />
          </div>
          <div className="Note-NoteBody">
            {/* {this.truncateNote(this.props.body)} <br /> */}
            <ReactMarkdown source={displayText} />
          </div>
        </li>
    );
  };
}