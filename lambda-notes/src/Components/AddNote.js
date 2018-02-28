import React, { Component } from 'react';
import LeftColumn from './LeftColumn';

class AddNote extends Component {
  handleCreate(){
    console.log('clicked');
  }
  
  render() {
    return (
      <div>
        <LeftColumn />
      </div>
    );
  }
}

export default AddNote;
