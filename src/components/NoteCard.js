import React, { Component } from 'react';

class NoteCard extends Component {
  renderTags(note) {
    return note.tags.map((tag, index) => 
      <span className="note-card-tag" key={index}>
        {tag.name}
      </span>
    );
  }

  render() {
    const { note, getNote, deleteNote, viewNote, } = this.props;
    return(
      <div className="note-card-container" onClick={() => getNote(note.id)}>
      {this.setState.viewNote = true}
        <div className="note-card-title">
          {note.title}
        </div>
        <div className="line"></div>
        <div className="note-card-content">
          {note.content}
        </div>
        <div className="note-card-tags">
          {this.renderTags(note)}
        </div>
        <span className="note-card-delete" onClick={() => deleteNote(note.id)}>
          <button className="">close</button>
        </span>
        <span className="note-card-edit" onClick={() => getNote(note.id)}>
          <button className="">Edit</button>
        </span>
        {/* <button className="nav-button" onClick={() => getNote(note.id)} >
          { viewNote ? 'Cancel' :  'View Note' }
        </button>  */}
      </div>
    );
  }
}

export default NoteCard;