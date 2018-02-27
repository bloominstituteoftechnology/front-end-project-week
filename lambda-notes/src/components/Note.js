import React, { Component } from 'react';

class Note extends Component {
  render() {
    return (
      <div className="Note">
        <h2 className="Note-Header">{this.props.note.title}</h2>
        <p>{this.props.note.content}</p>
      </div>
    );
  };
}

export default Note;