import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { createNote } from '../../actions';
import './CreateNewNote.css';

class CreateNewNote extends React.Component {
  state = {
    title: '',
    content: '',
  }
  render() {
    return (
      <div class="Container">
        <div className="Sidebar-Container">
          <Sidebar />
        </div>
        <div className="New-Note">
          <h2>Create New Note: </h2>
          <form onSubmit={this.handleSubmit}>
            <input type="text" 
              placeholder="Note Title"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
            <textarea 
              rows="20" 
              cols="50" 
              placeholder="Note Content"
              value={this.state.content}
              onChange={this.handleContentChange}>
            </textarea>
            <button type="submit">Save</button>
          </form>
        </div>
      </div>
    )
  }
  handleTitleChange = (event) => {
    this.setState({title: event.target.value});
  }
  handleContentChange = (event) => {
    this.setState({content: event.target.value});
  }
  handleSubmit = (event) => {
    event.preventDefault();
    this.props.createNote(this.state);
    this.setState({title: '', content: ''});
    this.props.history.push('/');
  }
}

const mapStateToProps = state => {
  return {
    state: state,
  }
}

export default connect(mapStateToProps, { createNote })(CreateNewNote);