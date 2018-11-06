import React, { Component } from 'react';
import Note from './Note';
import axios from 'axios';

class NoteCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      notes: null,
    }
  }

  componentDidMount(){
    const id = this.state.match.params.id;
    this.fetchNote(id);
  }
  

  fetchNote = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        this.setState(() => ({ notes: response.data }))
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
    if(!this.state.notes) {
      return <div>loading notes...</div>
    }
      return (
        <div>
          <Note />
        </div>
      )
  }
}

export default NoteCard;