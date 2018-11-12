import React, { Component } from 'react';
//import { Route } from 'react-router-dom';
import DeleteModal from './DeleteModal';
import NoteForm from './NoteForm';
import axios from 'axios';

class NoteCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      note: [],
      title: '',
      textBody:'',
      deleting: false,
      isEditing: false,
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

  toggleDeleting = () => {
    this.setState({deleting : !this.state.deleting})
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
      if(!this.state.note) {
        return (
        <div>
          <h2>Loading...</h2>
        </div>
        )
      }

      return (
        <div className='singleNote'>
          <div>{this.state.note.title}</div>
          <div>{this.state.note.textBody}</div>
          <button onClick={this.isEditing}>edit</button>
          <button onClick={this.deleting}>delete</button>
        </div>
      )
  }
}

export default NoteCard;