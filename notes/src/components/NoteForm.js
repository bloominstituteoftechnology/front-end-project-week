import React, { Component } from 'react';

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
      this.props.createNote(this.state)
      this.setState({title: '', textBody: ''})
      this.props.history.push('/');
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
              <button className="new-note-button" onClick={this.newNote} type="submit">
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
