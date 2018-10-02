import React, { Component } from 'react';
import axios from 'axios';

class NoteView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      textBody: ''
    }
  };

  componentDidMount() {
    const id = this.props.match.params.id;
    this.getNote(id);
  }

  getNote = id => {
    axios 
      .get(`https://killer-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        this.setState({
          id: response.data._id,
          title: response.data.title,
          textBody: response.data.textBody
        });
      })
      .catch(error => (
        console.log('Server Error', error)
      ));
  }

  render() {
    return (
      <div className='view-container'>
        <div className='top-nav'>
          <button>Edit</button>
          <button>Delete</button>
        </div>
        <div className='single-note'>
          <h3>{this.state.title}</h3>
          <p>{this.state.textBody}</p>
        </div>
      </div>
    );
  }
}

export default NoteView;