import React, { Component } from 'react';

class AddNote extends Component {
  handleCreate(){
    console.log('clicked');
  }
  
  render() {
    return (
      <div>
        <button>+ Create New Note</button>
      </div>
    );
  }
}

export default AddNote;
