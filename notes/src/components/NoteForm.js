
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
            placeholder="name"
            value={this.state.name}
            name="name"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="age"
            value={this.state.age}
            name="age"
          />
          <input
            onChange={this.handleInputChange}
            placeholder="height"
            value={this.state.height}
            name="height"
          />
          <button type="submit">Add to the notes</button>
        </form>
      </React.Fragment>
    );
  }
}

export default NoteForm;