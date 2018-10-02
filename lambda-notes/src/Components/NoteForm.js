import React, { Component } from 'react';

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      textBody: ''
    };
  }

  render() {
    return (
      <div>
        <h2>Create New Note:</h2>
        <form>
          <input
            name='title'
            placeholder='Note Title'
            value={this.state.title}
          />
          <input
            name='textBody'
            placeholder='Note Content'
            value={this.state.textBody}
          />
          <button type='submit'>Save</button>
        </form>
      </div>
    );
  }
}

export default NoteForm;