import React, { Component } from 'react';
//import Navigation from './Navigation';
import axios from 'axios';
import NoteCard from './NoteCard';

export default class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: [],
      title: '',
      textBody: ''
    }
  }

  componentDidMount(){
    const id = this.props.match.params.id;
    //this.editNote(id);
    axios
      .get(`https://fe-notes.herokuapp.com/note/get/${id}`)
      .then(response => {
        console.log('response data', response.data)
        const note = this.state.note.filter(note => `${note._id}` === id)
        console.log('note', note)
        const thenote = note
        this.setState({ id: id, note: thenote})
        
      })
      .catch(error => {
        console.log(error);
      })
  }

  inputChangeHandler = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  //EDIT NOTE BEGINS
  editNote = (id) => {
    const { title, textBody} = this.state;
    const updatedNote = {title, textBody};
    console.log("updatednote", updatedNote)
    console.log('edit note')
    //this.note.history.push(`/notecard/${id}`);
     axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, updatedNote)
      .then( response => {
        console.log('EDIT', response)
        //this.setState(() => ({ note: response.data }))
      })
      .catch(error => {
        console.log(error)
      })
  }
  //EDIT NOTE ENDS
  
  render() {
    return (
      <div>
        <form onSubmit={this.editNote}>
          <label>Title: </label>
          <input 
            onChange={this.inputChangeHandler}
            type='text' 
            name='title' 
            placeholder='note title'
            value={this.state.title} 
          />
          <br></br>
          <label>Text: </label>
          <textarea 
            onChange={this.inputChangeHandler}
            type='text'
            name='textBody'
            placeholder='note text'
            value={this.state.textBody}
          />
          <br></br>
          <button type='submit'>Update Note</button>
        </form>
      </div>
    )
  }

};