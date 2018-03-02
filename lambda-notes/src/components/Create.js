import React, { Component } from 'react';
import axios from 'axios';
import './Create.css';

class Create extends Component {
  state = {
    title: '',
    content: '',
  };

  constructor(props) {
    super(props);
    this.processChange = this.processChange.bind(this);
    this.processSave = this.processSave.bind(this);
  }

  processChange(event) {
    const newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  processSave(event) {
    event.preventDefault();
    axios.post('http://localhost:4444/notes/', this.state).then(() => {
      window.location.href = '/';
    })
    .catch((error) => {
      alert('Server error: Please try again later.');
    });
  }
  
  componentDidMount() {
    document.getElementById('App').style.height = '100%';
  }
  
  render() {
    return (
      <div className="create" id="create">
        <div className="create__heading">Create New Note:</div>
        <form className="new-note" onChange={this.processChange} onSubmit={this.processSave}>
          <input type="text" className="new-note__title" id="title" placeholder="Note Title" 
            value={this.state.title} />
          <textarea className="new-note__content" id="content" placeholder="Note Content" 
            value={this.state.content} />
          <input type="submit" className="new-note__save-button" content="Save" />
        </form>
      </div>
    );
  }
}

export default Create;