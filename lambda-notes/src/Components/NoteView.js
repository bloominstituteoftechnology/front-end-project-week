import React, { Component } from 'react';

class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      textBody: ''
    }
  };

  render() {
    return (
      <div className='view-container'>
        <div className='top-nav'>
          <button>Edit</button>
          <button>Delete</button>
        </div>
        <div className='single-note'>
          <h3>{this.state.title}</h3>
          <p>{this.state.textBody}</p>
        </div>
      </div>
    );
  }
}

export default NoteView;