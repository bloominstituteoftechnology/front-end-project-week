import React from 'react';
import { connect } from 'react-redux';
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
    const { title, entry } = this.state;
    this.props.addNote({ title, entry }, this.props.history);
  }

  render() {
    return (
      <div className='create-note'>
        <form onSubmit={this.onSubmit}>
          <h2>Create New Note:</h2>
          <input onChange={this.onChange} value={this.state.title} name='title' placeholder='Note Title' required='true'/>
          <div className='area-container'><textarea onChange={this.onChange} value={this.state.entry} name="entry" placeholder='Note Content' required='true'></textarea></div>
          <button type='submit'>Save</button>
        </form>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    sorted: state.sorted,
  };
}

export default connect(mapStateToProps, { addNote })(CreateNote);