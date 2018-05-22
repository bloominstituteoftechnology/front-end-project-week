import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
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
      <div className="Container">
        <div className="Sidebar-Container">
          <Sidebar />
        </div>
        <div className="New-Note">
          <header>
            <h2>Create New Note: </h2>
          </header>
          <form className="New-Note-Form" onSubmit={this.handleSubmit}>
            <input className="New-Note-Title"
              type="text" 
              placeholder="Note Title"
              value={this.state.title}
              onChange={this.handleTitleChange}
            />
            <textarea className="New-Note-Content"
              rows="20" 
              cols="30" 
              placeholder="Note Content"
              value={this.state.content}
              onChange={this.handleContentChange}>
            </textarea>
            <button className="Save-Button" type="submit">Save</button>
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