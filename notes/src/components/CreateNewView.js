import React from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import { addNote } from '../actions';

class CreateNewView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: '',
      textBody: ''
    }
  }


  handleNoteInput = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  addNoteHandler = e => {
    e.preventDefault();
    const { title, textBody } = this.state;
    const newNote = {
      title,
      textBody,
    };

    this.props.addNote(newNote);
    this.setState({ // sets form to empty for new form
      title: '',
      textBody: ''
    });
  };

  render () {
    return (
      <div className='create-new-view'>
        <NavBar />
        <div className='create-new-note'>
          <h2>Create New Note:</h2>
          <input 
          className='note-title-input'
          onChange={this.handleNoteInput}
          type='text'
          name='title'
          placeholder='Note Title'
          value={this.state.title}
          />
          <input 
          className='note-content-input'
          onChange={this.handleNoteInput}
          type='text'
          name='textBody'
          placeholder='Note Content'
          value={this.state.textBody}
          />
          <button type='button' className='save-button' onClick={this.addNoteHandler}>Save</button>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes,
  }
}

export default connect(mapStateToProps, {
  addNote
})(CreateNewView);