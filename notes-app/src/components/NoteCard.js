import React, { Component } from 'react';
//import { Link } from 'react-router-dom';
//import Note from './Note';
import axios from 'axios';

class NoteCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      note: null,
    }
  }

  componentDidMount(){
    const id = this.props.match.params.id;
    this.fetchNote(id);
  }
  
  fetchNote = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        this.setState(() => ({ note: response.data }))
      })
      .catch(error => {
        console.log(error);
      })
  }

  componentWillReceiveProps(newProps){
    if(this.props.match.params.id !== newProps.match.params.id){
      this.fetchNote(newProps.match.params.id);
    }
  }


  render() {
    if(!this.state.note) {
      return <div>loading notes...</div>
    }
      return (
        <div>
        <div>{this.state.note.title}</div>
        <div>{this.state.note.textBody}</div>
        </div>
      )
  }
}

export default NoteCard;