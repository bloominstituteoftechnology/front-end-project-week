import React, { Component } from 'react';
import Button from './Button';

class EditNote extends Component {
  state = {
    title: '',
    content: '',
  }
  handleChange = event => {
    this.setState( {[event.target.name] : event.target.value });
  }
  render() {
    return(
      <div className="create-note">
        <div className="form-block">
        <h2>Edit Note:</h2>
        <input 
          name="title"
          className="form-title"
          value={this.state.title}
          placeholder="Note Title"
          onChange={this.handleChange}
        />
        <textarea rows="30" cols="30"
          name="content"
          className="form-content"
          value={this.state.content}
          placeholder="Note Content"
          onChange={this.handleChange}>
        </textarea>
        <Button button={{text: 'Update', route: '/update'}} />
        </div>
      </div>
    );
  }
}

export default EditNote;