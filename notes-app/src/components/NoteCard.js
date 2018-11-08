import React, { Component } from 'react';
import axios from 'axios';

class NoteCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      note: [],
    }
  }

  getNote = id => {
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        console.log(response.data)
        this.setState(() => ({ note: response.data }))
      })
      .catch(error => {
        console.log(error);
      })
  }

  componentDidMount(){
    const id = this.props.match.params.id;
    this.getNote(id);
  }

  editNote = id => {
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`)
      .then( response => {
        this.setState(() => ({ note: response.data }))
      })
      .catch(error => {
        console.log(error)
      })
  }

/*   deleteNote = (e, id) => {
    e.preventDefault();
    this.props.deleteNote(this.state.note); //_id
  } */

/*   componentWillReceiveProps(newProps){
    if(this.props.match.params.id !== newProps.match.params.id){
      this.fetchNote(newProps.match.params.id);
    }
  } */

  render() {

      return (
        <div>
        <strong>{this.state.note.title}</strong>
        <p>{this.state.note.textBody}</p>
        <button onClick={this.toggleDeleting}>delete</button>
        <button>edit</button>
        </div>
      )
  }
}

export default NoteCard;