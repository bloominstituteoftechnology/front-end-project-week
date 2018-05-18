import React from 'react';
import { connect } from 'react-redux';

import { getEditNoteForm, deleteNote} from '../actions';

import { DefaultButton, PrimaryButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';

const Note = ({id, title, content, getEditNoteForm, deleteNote}) =>
  <div style={style.root}>
    <h3>{title}</h3>
    <p>{content}</p>
    <div style={style.displayTopCorner}>
      <PrimaryButton      
        primary={ true }
        iconProps={ { iconName: 'Edit' } }
        text='Edit'
        onClick={() => getEditNoteForm({id, title, content})}
        />
      <DefaultButton
        iconProps={ { iconName: 'Delete' } }
        text='Delete'
        onClick={() => deleteNote(id)}
        />
    </div>
  </div>

const mapStateToProps = (state) => {
  const { note } = state.toolbarReducer
  return note
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

export default connect(mapStateToProps, { getEditNoteForm, deleteNote })(Note);