import React from "react";
import { connect } from 'react-redux';

import { addNote } from '../../store/actions';


class NoteForm extends React.Component {
  state = {
    title: '',
    description: ''
  }

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick = e => {
    e.preventDefault();
    this.props.addNote(this.state);
    this.setState({ title: '', description: '' })
  }

  render() {
    return (
      <form>
        <h2>Create New Note:</h2>
        <input 
          name='title' 
          type='text' 
          placeholder="Note Title" 
          value={this.state.title}
          onChange={this.handleChange}
        />
        <textarea  
          name='description' 
          placeholder='Note Content' 
          value={this.state.description}
          onChange={this.handleChange}
        >
        </textarea>
        <button type='submit' onClick={this.handleClick}>Save</button>
      </form>
    );
  }
}

const mapStateToProps = state => {
  return {
    notes: state.notes
  };
};

export default connect(
  mapStateToProps,
  { addNote }
)(NoteForm);
