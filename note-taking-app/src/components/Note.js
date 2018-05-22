import React from 'react';
import { connect } from 'react-redux';
import Markdown from 'markdown-react-js';
import { Value } from 'slate'
import Plain from 'slate-plain-serializer';

import { updateNote, deleteNote, removeNote} from '../actions';

import { DefaultButton, PrimaryButton } from 'office-ui-fabric-react/lib/Button';

const Note = ({id, title, content, updateNote, deleteNote, removeNote}) =>
  <div style={style.root}>
    <div>
      <h2 style={style.removeMargin}>{title}</h2>
      <div style={style.topLine}>
        <Markdown text={Plain.serialize(Value.fromJSON(content))} />
      </div>
    </div>
    <div style={style.displayBottomCorner}>
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
    position: 'relative',
    height: '100%'
  },
  topLine: {
    borderTop: '1px solid #eaeaea'
  },
  removeMargin: {
    margin: 0
  },
  displayBottomCorner: {
    position: 'absolute',
    right: 10,
    bottom: 10
  }
}

export default connect(mapStateToProps, { updateNote, deleteNote, removeNote })(Note);