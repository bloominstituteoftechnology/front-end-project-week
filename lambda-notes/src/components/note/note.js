import React, { Component } from 'react';
import { connect } from 'react-redux';

class Note extends Component {
  render() {
    return (
      <div>
        <header>Note Title</header>
        <p>Lorem ipsum</p>
      </div>
    );
  }
}

export default Note;
