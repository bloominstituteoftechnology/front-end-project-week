import React from 'react';
import { connect } from 'react-redux';
import Markdown from 'markdown-react-js';
import { Value } from 'slate'
import Plain from 'slate-plain-serializer';

import TagOfNote from './TagOfNote';

import { selectNote } from '../actions';
import { Callout, DirectionalHint } from 'office-ui-fabric-react/lib/Callout';

import {
  DocumentCard,
  DocumentCardTitle,
  DocumentCardActions
} from 'office-ui-fabric-react/lib/DocumentCard';

class NoteCard extends React.Component {
  state = {
    tagOfNoteOpen: false
  }
  showTagOfNote = () => {
    this.setState({ tagOfNoteOpen: true })
  }
  hideTagOfNote = () => {
    this.setState({ tagOfNoteOpen: false })
  }
  render () {
  const {id, title, content, selectNote } = this.props
  const { tagOfNoteOpen } = this.state
  const reformatContent = typeof content === 'string' ? content : Plain.serialize(Value.fromJSON(content))
  return (
    <div>
    <div 
      className='ms-Grid-col ms-sm12 ms-lg3 ms-CalloutCoverExample-buttonArea' 
      style={style.extraMargin} 
      ref={button => this.tagOfNoteButtonElement = button }>
      <DocumentCard>
        <DocumentCardTitle title={title} onClick={() => selectNote({id, title, content})}/>
        <div style={style.cardPreview} onClick={() => selectNote({id, title, content})}>
          <Markdown text={reformatContent} />
        </div>
        <div style={style.displayInlineBlock}>
          <DocumentCardActions
            actions={
              [ 
                {
                  iconProps: { iconName: 'Tag' },
                  onClick: this.showTagOfNote
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
    <Callout
      className='ms-CalloutExample-callout'
      target={ this.tagOfNoteButtonElement }
      onDismiss={this.hideTagOfNote}
      setInitialFocus={ true }
      hidden={ !tagOfNoteOpen }
      directionalHint={DirectionalHint.bottomCenter}
      isBeakVisible={ false }
      gapSpace={0}
    >
      <div className='ms-CalloutExample-inner'>
        <TagOfNote id={id}/>
      </div>
    </Callout>
  </div>
    )
  }
}
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