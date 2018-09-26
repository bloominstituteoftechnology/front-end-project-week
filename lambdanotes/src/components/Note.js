import React, { Component } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
// import NoteCard from './NoteCard';

export default class Note extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: null
    };
  }

  componentDidMount() {
    console.log(this.props);
    const id = this.props.match.params.id;
    this.fetchNote(id);
  }

  fetchNote = id => {
    axios
    .get(`https://killer-notes.herokuapp.com/note/get/${id}`)
    .then(res => {
      this.setState(() => ({ note: res.data }));
    })
    .catch(err => {
      console.error(err);
    });
  }

  deleteNote = id => {
    axios
    .delete(`https://killer-notes.herokuapp.com/note/delete/${id}`)
    .then(() => {
      this.fetchNote(), this.props.history.push('/')
    })
    .catch(err => {
      console.error(err);          
    });
  } 

    editNote = id => {
    axios
    .put(`https://killer-notes.herokuapp.com/note/edit/${id}`, this.state)
    .then(() => this.fetchNote(),
    this.setState({
      title: '',
      textBody: ''
    }))
    .catch(err => {
      console.error(err);
    });
  }

  render() {
    if (!this.state.note) {
      return <div>Loading note...</div>;
    }
    return(
      <div className='one-note'>
        <div className='note-action'>
          <Link to={`notes/edit/${this.state.note._id}`}>edit</Link>
          <button onClick={()=> this.deleteNote(this.state.note._id)}>delete</button>
        </div>
        {/* <NoteCard /> */}
        <h3>{this.state.note.title}</h3>
        <p>{this.state.note.textBody}</p>
      </div>
    );
    
  }
}