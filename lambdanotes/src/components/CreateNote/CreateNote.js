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
    const URL = 'http://localhost:3000/'
    axios
      .post(`https://killer-notes.herokuapp.com/note/create`, {
        title: this.state.title,
        textBody: this.state.message
      })
      //.then(response => console.log(response))
      .then(response => window.location.href = URL)
      .catch(error => console.log(error));
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    return (
      <div class="form-group">
        <h3 className="header mt-2">Create New Note:</h3>
        <input
          name='title'
          type="text" 
          className="w-75 py-2 form-control"
          placeholder="Note Title"
          onChange={(e) => this.handleChange(e)}
        /><br />
        <textarea
          name='message' 
          className="w-95 py-3 pl-4 form-control"
          placeholder="Note Content"
          rows="15"
          onChange={(e) => this.handleChange(e)}
        /><br />
        <button 
          type="submit" 
          className="btn-large custom-button-teal text-white mt-0"
          onClick={() => this.handleSubmit()}
        >
          Save
        </button>
      </div>
    )
  }
}
