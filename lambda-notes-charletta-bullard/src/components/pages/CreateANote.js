import React, { Component } from 'react';
// import { addNote } from '/actions/index.js';
// import { connect } from 'react-redux';
import { Link} from 'react-router-dom';
import './CreateANote.css';

class CreateANote extends Component {
    state = {
        title: '',
        body: '',
       
      };

    handleInputChange = event => {
      this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = _ => {
      const { title, body } = this.state;
      this.props.createNote({ title, body });
      this.setState({ title: '', body: '', });
    };
   

  render() {
    const { title, body } = this.state;
    return (
      <div className='NoteForm'>
        <h2 className='SectionTitle'>Create New Note:</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            className='TitleInput'
            type='text'
            placeholder='Note Title'
            onChange={this.handleInputChange}
            name='title'
            value={title}
            required
          />
          <br />
          <textarea
            className='BodyInput'
            type='text'
            placeholder='Note Content'
            onChange={this.handleInputChange}
            name='body'
            value={body}
            required
          />
          <br />
          <Link to={'/'}><button onClick={() => this.handleSubmit()} className='Submit-Button' type='submit'>
            Submit
          </button></Link>
        </form>
      </div>
    );
  }

  // updateNote = event => {
  //   const name = event.target.name;
  //   const value = event.target.value;

  //   this.setState({ [name]: value });
  // };
  
  // createNote = event => {
  //   event.preventDefault();
  //   this.props.addNote(this.state);
  //   this.setState({ redirect: true });
  // };
}

export default CreateANote;