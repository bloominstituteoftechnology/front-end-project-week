import React, { Component } from 'react';
// import { Card, CardText, CardBody, CardTitle } from 'reactstrap';

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
              <div key={note._id} className="note">
                <p className="noteTitle">{note.title}</p>
                <hr />
                <p className="noteBody">{note.textBody}</p>
              </div>
            );
          })}
        </div>
      </div>
      // return <div>Hello World!</div>;
    );
  }
}

export default NoteList;
