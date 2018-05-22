import React, { Component } from 'react';
import { connect } from 'react-redux';
import Markdown from 'markdown-react-js';

import Checklist from './Checklist';

import { saveNote, toggleMarkdown, toggleChecklist } from '../actions';

import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';

class UpdateNoteForm extends Component {
  state = {
    id: '',
    title: '',
    content: ''
  }
  componentDidMount = () => {
    const { id, title, content } = this.props
    this.setState({
      id, title, content
    })
  }
  handleChange = (key, val) => {
    this.setState({
      [key]: val
    })
  }
  render() {    
    const { saveNote, toggleMarkdown, inMarkdown, toggleChecklist, inChecklist } = this.props
    const { id, title, content } = this.state
    return (
      <div style={style.root}>
        <div>
          <TextField
            placeholder='Tomorrow meetings'
            borderless
            name='title' value={title} onBeforeChange={val => this.handleChange('title', val)}
            style={style.largeText}
          />
          <div style={style.topLine}>
          {inChecklist ?
            <Checklist content={content} />
            :
            (inMarkdown ?
              // in Markdown mode
              <TextField
                style={style.removePadding}
                borderless
                placeholder='8am Standup, 1pm Engineer Team Meeting, ...'
                multiline
                autoAdjustHeight
                name='content' value={content} onBeforeChange={val => this.handleChange('content', val)}
              />
              :
              // in Preview mode
              <Markdown text={content} />
            )
          }
          </div>
        </div>
        <div style={style.displayBottomCorner}>
          <Toggle
            checked={inChecklist}
            onText='Checklist'
            offText='Paragraph'
            onChanged={checked => toggleChecklist(checked)}
          />
          <Toggle
            checked={inMarkdown}
            onText='Markdown'
            offText={<strike>Markdown</strike>}
            onChanged={checked => toggleMarkdown(checked)}
          />
          <PrimaryButton
            primary={ true }
            iconProps={ { iconName: 'Save' } }
            text='Save'
            onClick={() => saveNote({id, title, content, inChecklist})}
          />
        </div>        
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  const { notes } = state.notesReducer
  const { inMarkdown, inChecklist } = state.toolsReducer
  return {
    id: Object.keys(notes)[0],
    title: notes[Object.keys(notes)[0]].title,
    content: notes[Object.keys(notes)[0]].content,
    inMarkdown,
    inChecklist,
  }
}

const style = {
  root: {
    height: '100%',
    position: 'relative',
  },
  content: {
    height: 100
  },
  topLine: {
    borderTop: '1px solid #eaeaea',
  },
  largeText: {
    fontSize: '1.5em',
    fontWeight: 'bold',
    padding: 0
  },
  removePadding: {
    padding: 0,
    marginTop: '1em'
  },
  displayBottomCorner: {
    position: 'absolute',
    right: 10,
    bottom: 10,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}

export default connect(mapStateToProps, { saveNote, toggleMarkdown, toggleChecklist })(UpdateNoteForm);