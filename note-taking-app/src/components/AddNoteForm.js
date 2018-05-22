import React, { Component } from 'react';
import { connect } from 'react-redux';
import Markdown from 'markdown-react-js';
import { Toggle } from 'office-ui-fabric-react/lib/Toggle';
import { Editor } from 'slate-react'
import { Value } from 'slate'
import Plain from 'slate-plain-serializer'

import CheckListItem from './CheckListItem';

import { saveNote, toggleMarkdown } from '../actions';

import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { PrimaryButton } from 'office-ui-fabric-react/lib/Button';

const initialValue = Value.fromJSON({
  document: {
    nodes: [
      {
        object: 'block',
        type: 'paragraph',
        nodes: [
          {
            object: 'text',
            leaves: [
              {
                text: 'What will I do today?',
              },
            ],
          },
        ],
      },
    ],
  },
})

class AddNoteForm extends Component {
  state = {
    title: '',
    content: initialValue
  }
  handleChange = ({ value }) => {
    this.setState({
      content: value
    })
  }
  handleTitleChange = (type, val) => {
    this.setState({
      [type]: val
    })
  }
  keyDown = (event, change) => {
    const { value } = change
    console.log(change)

    if (event.ctrlKey && event.key == 'b') {
      console.log("b")
      change.splitBlock().setBlocks({ data: { checked: false } })
      change.setBlock('check-list-item')
      return true
    }

    if (
      event.key == 'Backspace' &&
      value.isCollapsed &&
      value.startBlock.type == 'check-list-item' &&
      value.selection.startOffset == 0
    ) {
      change.setBlocks('paragraph')
      return true
    }
  }
  renderNode = props => {
    console.log("Render")
    console.log(props)
    switch (props.node.type) {
      case 'check-list-item':
        return <CheckListItem {...props} />
    }    
  }
  render() {    
    const { saveNote, toggleMarkdown, inMarkdown } = this.props
    const { title, content } = this.state
    const reformatContent = content ? Value.fromJSON(content) : Plain.deserialize('')
    return (
      <div style={style.root}>
        <div>
          <TextField
            placeholder='Tomorrow meetings'
            underlined
            name='title' value={title} onBeforeChange={val => this.handleTitleChange('title', val)}
            style={style.largeText}
          />
          <div style={style.topLine}>
          {inMarkdown ?
            <Editor value={reformatContent} 
            onChange={this.handleChange} 
            style={style.content} 
            onKeyDown={this.keyDown}
            renderNode={this.renderNode}/>
            :
            <Markdown text={Plain.serialize(content)} />
          }
          </div>
        </div>
        <div style={style.displayBottomCorner}>
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
            onClick={() => saveNote({title, content: content.toJSON()})}
          />
        </div>
      </div>
    );
  }
} 

const mapStateToProps = (state) => {
  const { inMarkdown } = state.toolsReducer
  return {
    inMarkdown
  }
}

const style = {
  root: {
    height: '100%',
    position: 'relative'
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

export default connect( mapStateToProps, { saveNote, toggleMarkdown })(AddNoteForm);