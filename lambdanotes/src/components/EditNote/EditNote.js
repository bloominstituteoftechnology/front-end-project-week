import React, { Component } from 'react'
import './index.css';
import axios from 'axios';

export default class CreateNote extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      message: ''
    }
  }

  componentDidMount() {
    axios
      .get(`https://killer-notes.herokuapp.com/note/get/${this.props.match.params.id}`)
      .then(res => this.setState({ 
        title: res.data.title,
        message: res.data.textBody
      }))
  }

  handleUpdate = (id) => {
    const URL = 'http://localhost:3000/'
    axios
      .put(`https://killer-notes.herokuapp.com/note/edit/${id}`, {
        title: this.state.title,
        textBody: this.state.message
      })
      .then(() => window.location.href = URL)
      //.then(response => console.log(response))
      .catch(error => console.log(error));
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    //console.log('edit', this.state.note)
    return (
      <div class="form-group">
        <h3 className="header mt-2">Edit Note:</h3>
        <input
          name='title'
          type="text"
          value={this.state.title} 
          className="w-75 py-2 form-control"
          placeholder="Note Title"
          onChange={(e) => this.handleChange(e)}
        /><br />
        <textarea
          name='message'
          value={this.state.message} 
          className="w-95 py-3 pl-4 form-control"
          placeholder="Note Content"
          rows="15"
          onChange={(e) => this.handleChange(e)}
        /><br />
        <button 
          type="submit" 
          className="btn-large custom-button-teal text-white mt-0"
          onClick={() => this.handleUpdate(this.props.match.params.id)}
        >
          Update
        </button>
      </div>
    )
  }
}
