import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

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
    this.setState({
      title: '',
      textBody: '',
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="CreateNote">
            <form onSubmit={this.addNote}>
          <input
            onChange={this.handleInputChange}
            placeholder="title"
            name="title"
          />
        <textarea name="textBody"></textarea>
        </form>
            </div>
    );
  }
}


export default CreateNote

