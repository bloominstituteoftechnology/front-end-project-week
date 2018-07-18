import React, { Component } from 'react'
import './index.css';
import axios from 'axios';

export default class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      message: '',
    }
  }

  handleSubmit = () => {
    console.log(this.state.title, this.state.message)
    axios
      .post(`https://killer-notes.herokuapp.com/note/create`, {
        title: this.state.title,
        textBody: this.state.message
      })
      .then(response => console.log(response))
      .then(() => {
        this.setState({
          title: '',
          message: '',
        })
      })
      .catch(error => console.log(error));
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div>
        <h2 className="mb-4">Create New Note:</h2>
        <input
          name='title'
          type="text" 
          className="mb-2 w-50"
          placeholder="Note Title"
          onChange={(e) => this.handleChange(e)}
        /><br />
        <textarea
          name='message' 
          className="mb-2 w-75"
          placeholder="Note Content"
          rows="15"
          onChange={(e) => this.handleChange(e)}
        /><br />
        <button 
          type="submit" 
          className="btn btn-info btn-large px-5"
          onClick={() => this.handleSubmit()}
        >
          Save
        </button>
      </div>
    )
  }
}
