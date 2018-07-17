import React, { Component } from 'react'
import NoteForm from './NoteForm';

export default class NewNote extends Component {
  note = { title: '', textBody: '' }
  render() {
    return (
      <NoteForm note={ this.note }
      titleText="Create New Note"
      buttonText="Save"
      />
    )
  }
}
