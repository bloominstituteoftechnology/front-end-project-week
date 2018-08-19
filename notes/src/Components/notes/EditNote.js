import React, { Component } from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import * as actions from '../../Actions';
import './Notes.css';

class EditNote extends Component {
    state = {
        title: '',
        text: ''
    }

  handleSubmit = e => { 
        e.preventDefault();
        const { id } = this.props.match.params.id;
        const { note } = { title: this.state.title, textBody: this.state.text, tags: [] };
        this.props.updateNote(id, note);
        this.props.history.push(`/notes/${id}`)
      };

    handleInput = e => {this.setState({ [e.target.name]: e.target.value });};

render(){
return(
<div className="edit-container">
            <h2 className="edit-header">Edit Note: </h2>
            <form onSubmit={this.handleSubmit}>
                <input className="edit-title" 
                placeholder="Note Title"
                name="title"
                onChange={this.handleInput}
                value={this.state.title} 
                type="text"
                />
                <textarea className="edit-contents" 
                placeholder="Note Content"
                onChange={this.handleInput}
                value={this.state.text} 
                name="text"
                type="text"
                />
            </form>
            <button onSubmit={this.handleSubmit} className="edit-button">Update</button>
          </div>
)}
}

export default connect(null, actions)(EditNote);