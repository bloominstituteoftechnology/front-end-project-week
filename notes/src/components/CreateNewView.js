import React from 'react';
import NavBar from './NavBar';


// need to remove 8 SingleNote components once it is dynamic done now for layout purposes.

let nextNoteId = Math.random().toFixed(5) * 100000;
// replace after researching id.

class CreateNewView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      content: ''
    }
  }

  handleNoteInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addNoteHandler = e => {
    const { title, content } = this.state;
    const newNote = {
      title,
      content,
      id: nextNoteId++
    };
    // console.log(newNote)
    this.props.addNote(newNote);
    this.setState({
      title: '',
      content: ''
    });
  };

  render () {
    return (
      <div className='create-new-view'>
        <NavBar />
        <div className='create-new-note'>
          <h2>Create New Note:</h2>
          <input 
          onChange={this.handleNoteInput}
          type='text'
          name='title'
          placeholder='Note Title'
          value={this.state.title}
          />
          <input 
          onChange={this.handleNoteInput}
          type='text'
          name='content'
          placeholder='Note Content'
          value={this.state.content}
          />
          <button type='button' onClick={this.addNoteHandler}>Save</button>
        </div>
      </div>
    )
  }
}

export default CreateNewView;