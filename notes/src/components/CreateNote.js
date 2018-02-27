import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router';
import { addNote } from '../actions';
import './CreateNote.css';

class CreateNote extends React.Component {
  state = {
    title: '',
    entry: '',
    redirect: false,
  }

  onChange = (event) => {
    let { name, value } = event.target;
    this.setState({ [name]: value });
  }

  onSubmit = (event) => {
    event.preventDefault();
    this.props.addNote(this.state);
    this.setState({ redirect: true });
  }

  render() {
    return (
      <div className='create-note'>
        <form onSubmit={this.onSubmit}>
          <h2>Create New Note:</h2>
          <input onChange={this.onChange} value={this.state.title} name='title' placeholder='Note Title' required='true'/>
          <textarea onChange={this.onChange} value={this.state.entry} name="entry" placeholder='Note Content' required='true'></textarea>
          <button type='submit'>Save</button>
        </form>
        {this.state.redirect ? <Redirect to='/' /> : null }
      </div>
    );
  }
}

export default connect(null, { addNote })(CreateNote);