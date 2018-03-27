import React, { Component } from 'react';
import { connect } from 'react-redux';
import  { SEE_NOTE } from '../actions';
import { Link } from 'react-router-dom';


class NotesList extends Component {
  state = {
    id: '',
  }

  render() {
    return (
      <div className='note-container'>
        <h3 className='heading'>Your Notes:</h3>
        <ul>
          {this.props.notes.map (note => {
            return (
              <li className='note-container noteslist' key={note.id}>
                <Link to {`/note/${note.id}`} onClick={this.seeNote}>
                  <h4>{note.title}</h4> <hr /> <p>{note.text}</p>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  seeNote = note => {
    this.props.seeNote(note);
    this.setState({ id: note.id });
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  };
};

export default connect(mapStateToProps, { seeNote }) (NotesList);
