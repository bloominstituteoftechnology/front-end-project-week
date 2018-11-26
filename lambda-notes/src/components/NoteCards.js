import React, { Component } from 'react'
import NoteCard from './NoteCard';
import { connect } from 'react-redux';
import { getNotes } from '../actions/noteActions';

 class NoteCards extends Component {
componentDidMount() {
    this.props.getNotes();
}

render() {
    const { notes }= this.props;

    return (
      <div className="note-container">
        {notes.map(note => (
            <NoteCard 
                key={note._id}
                title={note.title}
                note={note}
            />
        ))}
      </div>
    )
  }
}
const mapStateToProps = state => ({
    notes: state.note.notes
});

export default connect(mapStateToProps, { getNotes }) (NoteCards);


