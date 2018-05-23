import React from 'react';
import { connect } from 'react-redux';
import Markdown from 'markdown-react-js';

import TagOfNote from './TagOfNote';
import Checklist from './Checklist';

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
  const {id, title, content, inChecklist, selectNote, searchBoxOpen, sortBoxOpen } = this.props
  const { tagOfNoteOpen } = this.state
  return (
    <div style={getNoteCardWidth(searchBoxOpen, sortBoxOpen)}>
    <div  
      ref={button => this.tagOfNoteButtonElement = button }>
      <DocumentCard>
        <DocumentCardTitle title={title} onClick={() => selectNote({id, title, content})}/>
        <div style={style.cardPreview} onClick={() => selectNote({id, title, content})}>
          { inChecklist ? 
            <Checklist content={content}/>
            :
            <Markdown text={content} />
          }
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
  cardPreview: {
    padding: '8px 16px',
    color: '#666'
  },
  displayInlineBlock: {
    display: 'inline-block'
  }
}

const getNoteCardWidth = (searchBoxOpen, sortBoxOpen) => ({
  padding: (!sortBoxOpen && !searchBoxOpen) ? 'auto' : 8,
  width: (!sortBoxOpen && !searchBoxOpen) ? '100%' : '25%',
})

export default connect(null, { selectNote })(NoteCard);