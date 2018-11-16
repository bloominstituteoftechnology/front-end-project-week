import React, { Component } from 'react';
import axios from 'axios';

class NewNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    };
  }

  addNote = event => {
    event.preventDefault();

    this.setState({
      title: '',
      content: ''
    });

    const {title, content} = this.state
    axios.post(`https://fe-notes.herokuapp.com/note/create`, {title, content})
      .then(response => {
        this.props.createNote();
      })
      .catch(err=>console.log(err));
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <div className="NewNote">
        <form onSubmit={this.addNote}>
          <input
            onChange={this.handleInputChange}
            placeholder="Note Title"
            value={this.state.title}
            name="title"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="Note Content"
            value={this.state.content}
            name="content"
          />
          <button type="submit">Save</button>
        </form>
      </div>
    );
  }
}

export default NewNote;


