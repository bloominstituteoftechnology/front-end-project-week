import React from 'react';
import { connect } from 'react-redux';

import NoteCard from './NoteCard';
import NoteSearchBox from './SearchBox';

const Notes = ({notes}) => 
  <div>
    <h3>Your Notes:</h3>
    {
      Object.keys(notes).map((id) => {
        const { title, content } = notes[id]
        return (          
          <NoteCard key={id} id={id} {...notes[id]} />
        )
      })
    }
  </div>

const mapStateToProps = (state) => {
  return state.notesReducer
}

export default connect(mapStateToProps, {})(Notes);