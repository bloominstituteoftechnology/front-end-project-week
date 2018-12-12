import React, { Component } from 'react';
import Navigation from './Navigation';
import axios from 'axios';

export default class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {},
      title: '',
      textBody: ''
    }
  }

/*   componentDidMount(){
    const id = this.props.match.params.id;
    this.editNote(id);
  } */

  inputHandler = event => {
    this.setState({ [event.target.name]: event.target.value })
  }

  //EDIT NOTE BEGINS
  editNote = (id) => {
    axios
      .put(`https://fe-notes.herokuapp.com/note/edit/${id}`, {
        title: this.state.title,
        textBody: this.state.textBody,
      })
      .then( response => {
        console.log('EDIT', response)
        this.setState(() => ({ note: response.data }))
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
          <label for='name'>Title: </label>
          <input 
            onChange={this.inputHandler}
            type='text' 
            name='title' 
            placeholder='title'
            value={this.state.title} 
          />
          <br></br>
          <label for='textBody'>Text: </label>
          <textarea 
            onChange={this.inputHandler}
            type='text'
            name='textBody'
            placeholder='text'
            value={this.state.textBody}
          />
          <br></br>
          <button type='submit'>Update Note</button>
        </form>
      </div>
    )
  }

};