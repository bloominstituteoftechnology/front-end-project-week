import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NoteList extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    // console.log('props ', this.props.notes);
    return (
      <div className="pageWrapper">
        <h1>Your Notes:</h1>
        <div className="noteList">
          {this.props.notes.map(note => {
            // console.log(note);
            return (
              <Link to={`/view/${note._id}`} key={note._id} className="note">
                <p className="noteTitle">{note.title}</p>
                <hr />
                <p className="noteBody">{note.textBody}</p>
              </Link>
            );
          })}
        </div>
      </div>
      // return <div>Hello World!</div>;
    );
  }
}

export default NoteList;
