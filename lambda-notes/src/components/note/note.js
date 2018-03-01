import React, { Component } from 'react';
import { connect } from 'react-redux';

class Note extends Component {
  render() {
    return (
      <div>
        <h3>Note Title</h3>
        <hr />
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua ...</p>
      </div>
    );
  }
}

export default Note;
