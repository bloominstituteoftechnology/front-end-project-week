import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveTag } from '../actions';

import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { IconButton } from 'office-ui-fabric-react/lib/Button';

class NoteForm extends Component {
  state = {
    name: ''
  }
  handleChange = (key, val) => {
    this.setState({
      [key]: val
    })
  }
  render() {    
    const { saveTag } = this.props
    const { name } = this.state
    return (
      <div style={style.newTagInput}>
        <TextField
          placeholder='Create New Tag...'
          onBeforeChange={val => this.handleChange('name',val)}
        />
        <IconButton
          iconProps={ { iconName: 'CirclePlus' } }
          onClick={() => saveTag({name}) }
        />
      </div>
    )
  }
}

const style = {
  newTagInput: {
    marginBottom: 7,
    display: 'flex'
  }
}

export default connect( null, { saveTag })(NoteForm);