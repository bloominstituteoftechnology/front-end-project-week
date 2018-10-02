import React, { Component } from 'react';

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      textBody: ''
    }
  };

  render() {
    return (
      <div className='edit-container'>
        <h2>Edit Note:</h2>
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
      </div>
    );
  }
}

export default EditForm;