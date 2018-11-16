import React, { Component } from "react";
import axios from 'axios';

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
    textBody: ""
    };
  }
  

  addNote = event => {
    event.preventDefault();
    const note= {
      title: this.state.title,
      textBody: this.state.textBody
    
    }
    axios.post('https://fe-notes.herokuapp.com/note/create', note).then(response => {
      this.setState({
        note: response.data
      }, () => console.log(this.state))

    }).catch(error => {
      console.error('Server Error', error);
    });
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

;

  render() {
    return (
      <div className="container">
        <form onSubmit={this.addNote}>
          <h2>Create Note</h2>
          <input
            type="text"
            name="title"
            id="title"
            value={this.state.title}
            onChange={this.handleChange}
            placeholder="Note Title"
          />
          <textarea rows="8" cols="80"
            type="text"
            name="textBody"
            id="textBody"
            value={this.state.textBody}
            onChange={this.handleChange}
            placeholder="Note Content"
          />
          <button type="submit">Create</button>
        </form>
      </div>
    );
  }
}

export default CreateNote;
