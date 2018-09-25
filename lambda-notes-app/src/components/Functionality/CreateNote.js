import React from 'react';

import axios from 'axios';

class CreateNote extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      note: {
        title: '',
        textBody: ''
      }
    }
  }

  addNote = e => {
    e.preventDefault();
    axios.post('https://killer-notes.herokuapp.com/note/create', this.state.note)
      .then(response => {
        this.props.updateNotes(response.data)
        this.setState({
          note: {
            title: '',
            textBody: ''
          }
        })
      })
  }

  handleTextInput = e => {
    this.setState({
      note: {
        ...this.state.note,
        [e.target.name]: e.target.value
      }
    })
  }

  render() {
    return (
      <div className='create-note'>
        {/* side bar goes here */}
        <form onSubmit={this.addNote}>
          <input 
            name='title'
            value={this.state.note.title}
            type='text' 
            placeholder='Note Title'
            onChange={this.handleTextInput}
          />
          <textarea
            name='noteBody'
            value={this.state.note.textBody}
            rows='40'
            cols='60'
            placeholder='Note Content'
            onChange={this.handleTextInput}
          />
  
          <button type='submit' onSubmit={this.addNote}>Save</button>
        </form>
        
      </div>
    )
  }
}

export default CreateNote;