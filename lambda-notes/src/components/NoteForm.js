import React, { Component } from 'react';
import { saveNote } from '../actions/notesActions';
import { connect } from 'react-redux';

class NoteForm extends Component {
  state = {
    title: '',
    textBody: ''
  }
  // inputChangeHandler = (e) => {
  //   e.preventDefault();
  //   this.setState({ [e.target.name]: e.target.value });
  // }
  saveHandler = (e) => {
    e.preventDefault();
    console.log('wtf');
    const title = this.state.title;
    const textBody = this.state.textBody;
    this.props.saveNote(title, textBody);
    this.setState({ title: '', textBody: '' })
  }
  // createHandler = () => {
  //   const title = this.state.title;
  //   const textBody = this.state.textBody;
  //   const note = {
  //     title,
  //     textBody,
  //     id: Math.random()
  //   }
  //   this.props.saveNote(note);
  //   this.setState({ 
  //     title: '' ,
  //     textBody: ''
  //   });
  // }
  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState({ title });
  }
  onTextBodyChange = (e) => {
    const textBody = e.target.value;
    this.setState({ textBody });
  }
  render() { 
    console.log('log 4', this.props)
    return ( 
      <div>
        <form>
          <input 
            type="text"
            placeholder="Note Title"
            value={this.state.title}
            onChange={this.onTitleChange}
          />
          <textarea 
            placeholder="Note Content"
            value={this.state.textBody}
            onChange={this.onTextBodyChange}
            id="" cols="30" rows="10"
           >
          </textarea>
          <button onClick={this.saveHandler}>Save Note</button>
        </form>
      </div> );
  }
}
 
export default connect(null, {saveNote})(NoteForm);