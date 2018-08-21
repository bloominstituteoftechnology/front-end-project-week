import React, { Component } from 'react';
import { connect } from 'react-redux';

import { deleteNote } from '../store/actions'; 
import Note from '../components/notes/Note';


class NotesContainer extends Component {

  deleteNote = id => {
    console.log('hello')
    this.props.deleteNoteHandler(id)
  }

  render() {
    return (
      <div>
        {
          this.props.notes.map((item, index) => <Note
            key={index}
            id={item.id}
            title={item.title}
            description={item.description}
            deleteNote={this.deleteNote}
          />)
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  notes: state.notes
})

const mapDispatchToProps = dispatch => ({
  deleteNoteHandler: id => {
    dispatch(deleteNote(id))
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(NotesContainer);