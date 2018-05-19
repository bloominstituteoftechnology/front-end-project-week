import React from 'react';
import { connect } from 'react-redux';

import { selectNote } from '../actions';

import {
  DocumentCard,
  DocumentCardTitle,
  DocumentCardActions
} from 'office-ui-fabric-react/lib/DocumentCard';

const NoteCard = ({id, title, content, selectNote }) => 
  <div className='ms-Grid-col ms-sm12 ms-lg4' style={style.extraMargin}>
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

const style = {
  extraMargin: {
    marginBottom: 10
  }
}

export default connect(null, { selectNote })(NoteCard);