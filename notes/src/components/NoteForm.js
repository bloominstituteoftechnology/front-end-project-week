
import React, { Component } from 'react';
import Axios from 'axios';

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
    
      tag: '',
      title: '',
      textBody: ''
    
    };
  }


  addNote = event => {
    event.preventDefault();
    
    const note = {
      tag: this.state.tag,
      title: this.state.title,
      textBody: this.state.textBody
    }
    Axios
      .post(`https://killer-notes.herokuapp.com/note/create`, note)
        .then(response => {
          console.log(response.data)
        })
        .catch(err => {
          console.error(`Error: ${err}`)
        })

    this.setState({
      tag: '',
      title: '',
      textBody: ''
    });
  }

  

  handleInputChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  

  render() {
    return (
      <React.Fragment>
        <form onSubmit={this.addNote}>
          <input
            onChange={this.handleInputChange}
            placeholder="tags"
            value={this.state.tag}
            name="tags"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="title"
            value={this.state.title}
            name="title"
          />
          <textarea rows="10" cols="30"
            onChange={this.handleInputChange}
            placeholder="textBody"
            value={this.state.textBody}
            name="textBody"
          />
          <button type="submit">Add to the notes</button>
        </form>
      </React.Fragment>
    );
  }
}

export default NoteForm;