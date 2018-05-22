import React from 'react';
import { connect } from 'react-redux';

import { makeSearchNoteByText, makeSortNoteBy } from '../selectors';

import NoteCard from './NoteCard';

const Notes = ({notes}) => 
  <div>
    {
      notes && Object.keys(notes).map((id) => {
        return (          
          <NoteCard key={id} id={id} {...notes[id]} />
        )
      })
    }
  </div>

const mapStateToProps = () => {
  const searchNoteByText = makeSearchNoteByText()
  const sortNoteBy = makeSortNoteBy()
  return (state) => {
    if (state.toolsReducer.searchBoxOpen) {
      return searchNoteByText(state.notesReducer.notes, state.toolsReducer.searchText)
    }
    return sortNoteBy(state.notesReducer.notes, state.toolsReducer.sortType)
  }
}

export default connect(mapStateToProps, {})(Notes);