import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import './CreateNote.css';

class CreateNote extends React.Component {
  state = {
    title: '',
    entry: '',
  }

  render() {
    return (
      <div className='create-note'>
        <form>
          <h2>Create New Note:</h2>
          <input name='title' placeholder='Note Title' />
          <textarea name="entry" placeholder='Note Content'></textarea>
          <Link to='/'><button>Save</button></Link>
        </form>
      </div>
    );
  }
}

export default connect()(CreateNote);