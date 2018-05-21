import React from 'react';
import { connect } from 'react-redux';
import Markdown from 'markdown-react-js';

import { selectNote } from '../actions';

import {
  DocumentCard,
  DocumentCardTitle,
  DocumentCardActions
} from 'office-ui-fabric-react/lib/DocumentCard';

const NoteCard = ({id, title, content, selectNote }) => 
  <div className='ms-Grid-col ms-sm12 ms-lg3' style={style.extraMargin}>
    <DocumentCard>
      <DocumentCardTitle title={title} onClick={() => selectNote({id, title, content})}/>
      <div style={style.cardPreview} onClick={() => selectNote({id, title, content})}>
        <Markdown text={content} />
      </div>
      <div style={style.displayInlineBlock}>
        <DocumentCardActions
          actions={
            [ 
              {
                iconProps: { iconName: 'Tag' },
                onClick: () => {console.log('')}
              },
              {
                iconProps: { iconName: 'Pin'},
                onClick: () => {console.log('')}
              },
              {
                iconProps: { iconName: 'Ringer' },
                onClick: () => {console.log('')}
              }
            ]
          }
        />
      </div>
    </DocumentCard>
  </div>

const style = {
  extraMargin: {
    marginBottom: 10
  },
  cardPreview: {
    height: 150,
    padding: '8px 16px',
    color: '#666'
  },
  displayInlineBlock: {
    display: 'inline-block'
  }
}

export default connect(null, { selectNote })(NoteCard);