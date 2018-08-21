import React, { Component } from 'react';


class EditNoteForm extends Component {
  state = {
    title: '',
    description: ''
  }

  render() {
    let note = this.props.notes.filter(item => item.id === parseInt(this.props.match.params.id, 10));
    console.log('edit',this.props)
    console.log(note)
    return (
      <div>
        <h1>Hello</h1>
      </div>
    );
  }
}

export default EditNoteForm;