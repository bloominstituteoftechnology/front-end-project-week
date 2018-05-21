import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveTag } from '../actions';

import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { IconButton } from 'office-ui-fabric-react/lib/Button';

class AddTagForm extends Component {
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
          onKeyPress={(e) => { e.key === 'Enter'? saveTag({name}): null}}
        />
      </div>
    )
  }
}

const style = {
  newTagInput: {
    marginBottom: 7,
    display: 'inline-block',
    paddingBottom: 10,
    marginBottom: 13,
    borderBottom: '1px solid #eaeaea',
    width: '100%'
  }
}

export default connect( null, { saveTag })(AddTagForm);