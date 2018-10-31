import React, { Component } from 'react';
import { editNote, fetchNotes } from '../actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

class EditForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
        title: '',
        textBody: ''
    }
  }
  handleInputChange = event => this.setState({ 
    [event.target.name]: event.target.value 
  });
  handleUpdate = id => {
    const noteToUpdate = this.props.notes.find(note => note._id === id);
    this.setState({ noteToUpdate });
  }  
  editNote = (event, id) => {
    event.preventDefault();
    this.props.editNote(this.state );
    this.setState({ title: '', textBody: '' });
    this.props.history.push('/');
  }

  render() {
    const noteId = this.props.match.params.id;
    let note = this.props.notes.find(note => note._id === noteId);
    
    return (
      <form onSubmit={(event) => this.editNote(event, noteId)} className='form'>
        <h3 className='add-header'>Edit Note:</h3>
        <input 
          onChange={this.handleInputChange}
          className='title'
          type='text'
          name='title' 
          value={this.state.title}
          placeholder='Note Title'/>
        <textarea 
          onChange={this.handleInputChange}
          className='body'
          type='text'
          name='textBody' 
          value={this.state.textBody}
          placeholder='Note Content'/>
        <button className='save' type='submit'>Submit</button>
    </form>
    );
  }
}

const mapStateToProps = state => { 
  return {
      notes: state.notes
  };
};
export default withRouter(connect(mapStateToProps, { editNote, fetchNotes })(EditForm));