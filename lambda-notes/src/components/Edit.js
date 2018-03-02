import React, { Component } from 'react';
import axios from 'axios';
import './Edit.css';

class Edit extends Component {
  state = {
    title: '',
    content: '',
  };

  constructor(props) {
    super(props);
    this.processChange = this.processChange.bind(this);
    this.processUpdate = this.processUpdate.bind(this);
  }

  processChange(event) {
    const newState = {};
    newState[event.target.id] = event.target.value;
    this.setState(newState);
  }

  processUpdate(event) {
    event.preventDefault();
    axios.put(`http://localhost:4444/notes/${this.props.match.params.id}`, this.state).then(() => {
      window.location.href = '/';
    })
    .catch((error) => {
      alert('Server error: Please try again later.');
    });
  }
  
  componentDidMount() {
    document.getElementById('App').style.height = '100%';
    axios.get('http://localhost:4444/notes/').then((response) => {
      this.setState(() => response.data.find(note => note.id === Number(this.props.match.params.id)));
    })
    .catch((error) => {
      alert('Server error: Please try again later.');
      window.location.href = '/';
    });
  }
  
  render() {
    return (
      <div className="edit" id="edit">
        <div className="edit__heading">Edit Note:</div>
        <form className="edit-note" onChange={this.processChange} onSubmit={this.processUpdate}>
          <input type="text" className="edit-note__title" id="title" placeholder="Note Title" 
            value={this.state.title} />
          <textarea className="edit-note__content" id="content" placeholder="Note Content" 
            value={this.state.content} />
          <input type="submit" className="edit-note__update-button" content="Update" />
        </form>
      </div>
    );
  }
}

export default Edit;