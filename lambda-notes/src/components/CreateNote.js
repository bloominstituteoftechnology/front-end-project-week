import React, { Component } from 'react';
import '../index.css';

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      textBody: '',
    };
  }

  createNote = event => {
    event.preventDefault();
    this.props.addnote(this.state)
    event.target.reset()
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="modifynote container">
        <h2>Create New Note:</h2>
        <form onSubmit={this.createNote}>
          <input input className="input"
            onChange={this.handleInputChange}
            placeholder="Note Title"
            name="title"
          />
          <textarea
            className="textarea"
            name="textBody"
            onChange={this.handleInputChange}
            placeholder="Note Content"
          >
          </textarea><br />
          <button className="link" type="submit">Save</button>
        </form>
      </div>
    );
  }
}


export default CreateNote

