import React, { Component } from 'react';
//import { Route } from 'react-router-dom';
import DeleteModal from './DeleteModal';
import NoteForm from './NoteForm';
import axios from 'axios';

//EDIT IS HERE!!
//DELETE IS HERE!!

class NoteCard extends Component {
  constructor(props){
    super(props);
    this.state = {
      note: [],
      title: '',
      textBody:'',
      isDeleting: false,
      isEditing: false,
    }
  }

  //GET NOTE BEGINS

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
  //GET NOTE ENDS

  //EDIT NOTE BEGINS

  editNote = (id) => {
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, {
        title: this.state.title,
        textBody: this.state.textBody,
      })
      .then( response => {
        this.setState(() => ({ note: response.data }))
      })
      .catch(error => {
        console.log(error)
      })
  }
  //EDIT NOTE ENDS

  //DELETE STARTS
  toggleDeleting = () => {
    this.setState({deleting : !this.state.deleting})
  }

  deleteNote = (event, id) => {
    event.preventDefault();
    axios
      .delete(`https://fe-notes.herokuapp.com/note/delete/${id}`)
      .then(response => {
        console.log('DELETE', response)
        this.setState({ note: response.data })
      })
      .catch( error => { console.log(error) })
  }
  //DELETE ENDS

  componentWillReceiveProps(newProps){
    if(this.props.match.params.id !== newProps.match.params.id){
      this.fetchNote(newProps.match.params.id);
    }
  }

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
          <button onClick={this.isDeleting}>delete</button>
        </div>
      )
  }
}

export default NoteCard;