import React from 'react';
import { connect } from 'react-redux';
import { addNote } from '../actions';
import './CreateNote.css';

import Loading from './Loading';

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
    const { title, entry } = this.state;
    this.props.addNote({ title, entry }, this.props.history);
  }

  render() {
    return (
      <div className='create-note'>
        <form onSubmit={this.onSubmit}>
          <h2>Create New Note:</h2>
          <input onChange={this.onChange} value={this.state.title} name='title' placeholder='Note Title' required='true' maxlength='300' />
          <div className='area-container'><textarea onChange={this.onChange} value={this.state.entry} name="entry" placeholder='Note Content' required='true' maxlength='80000'></textarea></div>
          { this.props.loading ? <Loading /> : <button type='submit'>Save</button> }
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    sorted: state.notes.sorted,
    loading: state.notes.loading,
  };
}

export default connect(mapStateToProps, { addNote })(CreateNote);