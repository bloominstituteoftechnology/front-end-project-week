import React from 'react';
import NavBar from './NavBar';


// need to remove 8 SingleNote components once it is dynamic done now for layout purposes.



class EditView extends React.Component {
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

  editNoteHandler = e => {
    const { title, content, id } = this.state; // more research how to handle id on edits?
    const newNote = {
      title,
      content,
      id
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
        {/* <NavBar /> */}
        <div className='create-new-note'>
          <h2>Edit Note:</h2>
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
          <button type='button' onClick={this.addNoteHandler}>Update</button>
        </div>
      </div>
    )
  }
}

export default EditView;