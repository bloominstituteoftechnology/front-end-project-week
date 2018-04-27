import React, { Component } from 'react';
import { createNote } from '../actions';
import { connect } from 'react-redux';
import './CreateNote.css';

class CreateNote extends Component {
  state = {
    title: '',
    content: ''
  };

  render() {
    return (
         
        <div className="createNoteContainer">
        <h3 className="headerNotes">Create New Note:</h3>
        <div className="inputFields">
        <div className="inputTitle">
            <input
                type="text"
                className="title"
                name="title"
                value={this.state.title}
                placeholder="Note Title"
                onChange={e => this.setState({ [e.target.name]: e.target.value })}
            />
        </div>
        <div className="inputContent">
            <textarea
                type="text"
                className="content"
                name="content"
                value={this.state.content}
                placeholder="Note Content" 
                onChange={e => this.setState({ [e.target.name]: e.target.value })} >
            </textarea>
        </div>
        </div>
        <div>
        <button className="saveButton"
          onClick={() => {
            this.props.createNote({ title: this.state.title, content: this.state.content });
            this.setState({ title: '', content: '' });
          }}>Save</button>
        </div>
   </div>);
  }
}

const mapStateToProps = state => {
  return {
    creatingNote: state.creatingNote,
    error: state.error
  };
};

export default connect(mapStateToProps, { createNote })(CreateNote);
