import React from 'react';
import { connect } from 'react-redux';

import { selectNote } from '../actions';

import {
  DocumentCard,
  DocumentCardTitle,
  DocumentCardActions
} from 'office-ui-fabric-react/lib/DocumentCard';

const NotesChild = ({notes, selectNote }) => {
  return (
    Object.keys(notes).map((id) => {
      const { title, content } = notes[id]
      return (
        <div key={id} className='ms-Grid-col ms-sm12 ms-lg4' style={style.extraMargin}>
        <DocumentCard  onClick={() => selectNote({id, title, content})}>
          <DocumentCardTitle title={title} />
          <div className='ms-ConversationTile-TitlePreviewArea' >
            <DocumentCardTitle title={content} shouldTruncate={ true } showAsSecondaryTitle={ true } />
          </div>
          <DocumentCardActions
            actions={
              [ {iconProps: { iconName: 'Share' }},
                {iconProps: { iconName: 'Pin' },},
                {iconProps: { iconName: 'Ringer' },},
              ]
            }
          />
        </DocumentCard>
      </div>
      )
    })
  )
}

const Notes = (props) => 
  <div>
    <h3>Your Notes:</h3>
      <NotesChild {...props} />
  </div>

const mapStateToProps = (state) => {
  return state.notesReducer
}

const style = {
  extraMargin: {
    marginBottom: 10
  }
}

export default connect(mapStateToProps, { selectNote })(Notes);