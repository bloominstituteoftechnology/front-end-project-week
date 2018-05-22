import React, { Component } from 'react';
import Button from '../Button';

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <Button type="primary" title={this.props.action} link="/" />
    )
  }
}

export default NoteForm;