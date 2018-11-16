import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class NoteList extends Component {
  constructor(props) {
    super(props);
  }

  truncateString = (str, num) => {
    if (str.length > num && num > 3) {
      return str.slice(0, num - 3) + '...';
    } else if (str.length > num && num <= 3) {
      return str.slice(0, num) + '...';
    } else {
      return str;
    }
  };

  render() {
    // console.log('props ', this.props.notes);
    return (
      <div className="pageWrapper">
        <h1>Your Notes:</h1>
        <div className="noteList">
          {this.props.notes.map(note => {
            // console.log(note);
            const body = this.truncateString(note.textBody, 210);
            return (
              <Link to={`/view/${note._id}`} key={note._id} className="note">
                <p className="noteTitle">{note.title}</p>
                <hr />
                <p className="noteBody">{body}</p>
                {/* <p className="noteBody">{note.textBody}</p> */}
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
