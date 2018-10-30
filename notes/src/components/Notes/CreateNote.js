import React, { Component } from 'react';
import axios from 'axios';

class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      textBody: ''
    }
  }

  addNote = event => {
    event.preventDefault();
    axios 
      .post('https://fe-notes.herokuapp.com/note/create', this.state)
      .then( response => {
        console.log(response)
        console.log(this.props.notes)
        this.setState({
          notes: response.data,
          title: '',
          textBody: ''
        })
      })
      .then( () => this.props.history.push('/'))
      .catch( error => {
        console.error(error)
      })
  }


handleInputChange = event => {
  this.setState({ [event.target.name]: event.target.value })}

  render() {
    return(
      <div>
        <form onSubmit={this.addNote}>
        <h2>Create New Note:</h2>
          <input
            onChange={this.handleInputChange}
            placeholder="Note Title"
            value={this.state.title}
            name="title"
          />
          <textarea 
            onChange={this.handleInputChange}
            placeholder="Note Content"
            value={this.state.textBody}
            name="textBody"
          />
        <button type="submit">Save</button>
        </form>
      </div>
    )
  }
}

export default CreateNote;