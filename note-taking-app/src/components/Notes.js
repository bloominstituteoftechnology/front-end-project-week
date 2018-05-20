import React from 'react';
import { connect } from 'react-redux';

import { makeSearchNoteByText } from '../selectors';

import NoteCard from './NoteCard';

const Notes = ({notes}) => 
  <div>
    <h3>Your Notes:</h3>
    {
      notes && Object.keys(notes).map((id) => {
        const { title, content } = notes[id]
        return (          
          <NoteCard key={id} id={id} {...notes[id]} />
        )
      })
    }
  </div>

const mapStateToProps = () => {
  const searchNoteByText = makeSearchNoteByText()
  return (state) => searchNoteByText(state.notesReducer.notes, state.toolsReducer.searchText)
}

export default connect(mapStateToProps, {})(Notes);