import React, { Component } from 'react';


class AddNoteForm extends Component {
  state = {
    title: '',
    description: ''
  }

  render() {
    console.log('add',this.props)
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default AddNoteForm;