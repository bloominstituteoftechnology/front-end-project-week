import React, { Component } from 'react'

export default class CreateNote extends Component {
  render() {
    return (
      <div>
        <h1>Create New Note</h1>
        <input type='text' />
        <textarea cols='40' rows='50'></textarea>
      </div>
    )
  }
}
