import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button } from 'reactstrap';
import { createNote } from '../Actions';

class NotesList extends Component {


  render() {
    return (
      <div>
        <ul className='notesList'>
          {this.props.notes.map((note, idx) => {
            return (
              <li className='note' key={note.key}>
                <div className='noteTitle'><h3>{note.title}</h3></div>
                <div className='noteContent'><p>{note.content}</p></div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state
  };
};

export default connect(mapStateToProps, { createNote })(NotesList);