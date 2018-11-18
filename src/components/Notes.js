import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Notes extends Component {
  render() {
    return (
      <div className="home" style={{border: '5px solid pink', width: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'center'}}>
        <h2>Your Notes:</h2>
        <div className="notes" style={{border: '5px solid red', display: 'flex', justifyContent: 'center'}}>
          {this.props.notes.map((note) => (
            <Link
              className="cards"
              to={{ pathname: `viewnote/${note.id}`, state: note }}
              key={Math.random()}
            >
              {/* passing state down with the link to the route on App.js */}
              <div>
                <h3>{note.title}</h3>
                <div className="notes-text">{note.textBody}</div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    );
  }
}

export default Notes;
