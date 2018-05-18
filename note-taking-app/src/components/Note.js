import React from 'react';
import { connect } from 'react-redux';

import { updateNote, deleteNote} from '../actions';

import { DefaultButton, PrimaryButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';

const Note = ({id, title, content, updateNote, deleteNote}) =>
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
        onClick={() => deleteNote(id)}
        />
    </div>
  </div>

const mapStateToProps = (state) => {
  const { notes } = state.notesReducer
  return notes.filter(note => note.selected)[0]
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

export default connect(mapStateToProps, { updateNote, deleteNote })(Note);