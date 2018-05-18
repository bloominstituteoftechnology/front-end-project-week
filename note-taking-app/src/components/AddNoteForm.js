import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveNote } from '../actions';

import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { PrimaryButton, IButtonProps } from 'office-ui-fabric-react/lib/Button';

class NoteForm extends Component {
  state = {
    id: '',
    title: '',
    content: ''
  }
  handleChange = (key, val) => {
    this.setState({
      [key]: val
    })
  }
  render() {    
    const { saveNote } = this.props
    const { id, title, content } = this.state
    return (
      <div style={style.root}>
        <TextField
          placeholder='Tomorrow meetings'
          underlined
          name='title' value={title} onBeforeChange={val => this.handleChange('title', val)}
        />
        <TextField
          style={style.expand}
          borderless
          placeholder='8am Standup, 1pm Engineer Team Meeting, ...'
          multiline
          autoAdjustHeight
          name='content' value={content} onBeforeChange={val => this.handleChange('content', val)}
        />
        <PrimaryButton
          style={style.displayBottomCorner}
          primary={ true }
          iconProps={ { iconName: 'Save' } }
          text='Save'
          onClick={() => saveNote({id, title, content})}
          />
      </div>
    );
  }
}

const style = {
  root: {
    height: '100%',
    position: 'relative'
  },
  displayBottomCorner: {
    position: 'absolute',
    right: 10,
    bottom: 10
  }
}

export default connect( null, { saveNote })(NoteForm);