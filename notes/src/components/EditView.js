import React from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import { addNote } from '../actions';

class EditView extends React.Component {
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

  editNoteHandler = e => {
    const { title, textBody, id } = this.state; // more research how to handle id on edits?
    const newNote = {
      title,
      textBody,
      id
    };
    // console.log(newNote)
    this.props.addNote(newNote);
    this.setState({
      title: '',
      textBody: ''
    });
  };

  render () {
    return (
      <div className='create-new-view'>
        <NavBar />
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
          name='textBody'
          placeholder='Note Content'
          value={this.state.textBody}
          />
          <button type='button' onClick={this.editNoteHandler}>Update</button>
        </div>
      </div>
    )
  }
}

// export default EditView;

const mapStateToProps = state => {
  return {
    notes: state.notes,
  }
}

export default connect(mapStateToProps, {
  addNote
})(EditView);