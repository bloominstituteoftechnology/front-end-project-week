import React, { Component } from 'react';
import axios from 'axios';

class NoteForm extends Component {
  constructor() {
    super()
      this.state ={
        title: '',
        textBody: '',
      }
  }

  handleClick = (event) => {
    event.preventDefault()
    if(this.state.isEditing) {
      this.props.updateItem();
    } else {
      this.newNote();
    }
  }

  handleInputChange = (event) => {
    this.setState({[event.target.name]: event.target.value})
  }

  newNote = () => {
     axios
      .post('https://fe-notes.herokuapp.com/note/create', this.state ) 
      .then(res => this.props.history.push(`/note/${res.data.success}`)) 
      .catch(err => console.log(err))
      this.setState({title: '', textBody: '', tags: ''})
      this.props.refreshNotes()
  }

  render() {
    return (
      <div className='form-container'>
      <div className='form-headline'>
        <h2>{this.state.isEditing ? "Update Note" : "Create Note"}</h2>
      </div >
      <div className="form">
          <form onSubmit={this.handleClick} >
            <input
              onChange={this.handleInputChange}
              placeholder="title"
              value={this.state.title}
              name="title"
              type="text"
            />
            <textarea
              onChange={this.handleInputChange}
              placeholder="write your note here"
              value={this.state.textBody}
              name="textBody"
            />
            <div className="form-button">
              <button className="new-note-button" onClick={this.handleClick} type="submit">
                {this.state.isEditing ? "Update Note" : "Create Note"}
              </button>
            </div>
          </form>
        </div>

      </div>
    );
  }
}

export default NoteForm;
