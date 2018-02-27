import React, { Component } from 'react';

class CreateNote extends Component {
  render() {
    return (
      <div>
        <h1>Create New Note:</h1>
        <input type="text" placeholder="Note Title"/>
        <input type="text" placeholder="Note Content"/>
      </div>
    )
  }
}

export default CreateNote;