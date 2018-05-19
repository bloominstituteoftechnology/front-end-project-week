import React from 'react';
import { connect } from 'react-redux';

import { updateNote, deleteNote, removeNote} from '../actions';

import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';

const Note = ({id, title, content, updateNote, deleteNote, removeNote}) =>
  <div style={style.root}>
    <h3>{title}</h3>
    <p>{content}</p>
    <div style={style.displayTopCorner}>
      <PrimaryButton      
        primary={ true }
        iconProps={ { iconName: 'Edit' } }
        text='Edit'
        onClick={() => updateNote({id, title, content})}
        />
      <DefaultButton
        iconProps={ { iconName: 'Delete' } }
        text='Delete'
        onClick={() => removeNote(id)}
        />
    </div>
  </div>

const mapStateToProps = (state) => {
  const { notes } = state.notesReducer
  
  return {
    id: Object.keys(notes)[0],
    title: notes[Object.keys(notes)[0]].title,
    content: notes[Object.keys(notes)[0]].content
  }
}

const style = {
  root: {
    position: 'relative'
  },
  displayTopCorner: {
    position: 'absolute',
    right: 10,
    top: 10
  }
}

export default connect(mapStateToProps, { updateNote, deleteNote, removeNote })(Note);