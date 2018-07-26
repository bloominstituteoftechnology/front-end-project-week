import React, { Component } from 'react';
import { connect } from 'react-redux';
import { editNote } from '../actions/notesActions'

class EditNoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: this.props.note.title,
      textBody: this.props.note.textBody
     }
  }
  onTitleChange = (e) => {
    const title = e.target.value;
    this.setState({ title });
  }
  onTextBodyChange = (e) => {
    const textBody = e.target.value;
    this.setState({ textBody });
  }
  editHandler = (e) => {
    e.preventDefault();
    const changedNote = {
      title: this.state.title,
      textBody: this.state.textBody,
    }
    this.props.editNote(changedNote, this.props.id);
    this.props.history.push('/');
  }
  render() { 
    console.log('EditForm', this.props)
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
          <button onClick={this.editHandler}>Edit Note</button>
        </form>
      </div> 
    );
  }
};

const mapStateToProps = (state, props) => {
  return {
    note: state.find((note) => note.id === props.id)  
  };
};
 
export default connect(mapStateToProps, {editNote})(EditNoteForm);