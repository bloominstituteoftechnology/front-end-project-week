import React, { Component } from 'react';

class AddNote extends Component {
  render() {
    return (
      <div className='right-column'>
        <h2>Create New Note:</h2>
        <input type="text" />
        <input type="text" />
        <input type="submit" />
      </div>
    );
  }
}

export default AddNote;
