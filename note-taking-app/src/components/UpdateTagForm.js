import React, { Component } from 'react';
import { connect } from 'react-redux';

import { saveTag, removeTag } from '../actions';

import { TextField } from 'office-ui-fabric-react/lib/TextField';
import { PrimaryButton, DefaultButton } from 'office-ui-fabric-react/lib/Button';

class UpdateTagForm extends Component {
  state = {
    name: ''
  }
  handleChange = (key, val) => {
    this.setState({
      [key]: val
    })
  }
  componentDidMount = () => {
    this.setState({ name: this.props.name })
  }
  render() {    
    const { saveTag, removeTag, id } = this.props
    const { name } = this.state
    return (
      <div>
        <div style={style.inner}>
          <TextField
            label='Change Tag Name'
            value={name}
            onBeforeChange={val => this.handleChange('name',val)}
          />
        </div>
        <div style={style.actions}>
          <PrimaryButton
            primary={ true }
            iconProps={ { iconName: 'Save' } }
            text='Save'
            onClick={() => saveTag({id, name})}
          />
          <DefaultButton
            iconProps={ { iconName: 'Delete' } }
            text='Delete'
            onClick={() => removeTag(id)}
          />
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  const { id, name } = state.tagsReducer.updatingTag
  return { id, name }
}

const style = {
  inner: {
    padding: 10
  },
}

export default connect( mapStateToProps, { saveTag, removeTag})(UpdateTagForm);