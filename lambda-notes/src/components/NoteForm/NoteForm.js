import React, { Component } from 'react';
import Button from '../Button';
import { connect } from 'react-redux';
import { getNote, addNote, updateNote } from '../../actions';

class NoteForm extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: '',
      contents: ''
    }
  }
  handleChange = event => {
    this.setState({ [event.target.name]:event.target.value });
  }
  saveForm = event => {
    (this.props.noteId) ? this.editNote(this.props.noteId) : this.createNewNote();
  }
  createNewNote = () => {
    if (this.state.title !== ''){
      const newNote = {
        title: this.state.title,
        contents: this.state.contents
      };

      this.props.addNote(newNote);
    }
  }
  editNote = id => {
    if (this.state.title !== ''){
      const updatedNote = {
        title: this.state.title,
        contents: this.state.contents
      };

      this.props.updateNote(id, updatedNote);
    }
  }
  componentDidMount(){
    if (this.props.noteId){
      this.props.getNote(this.props.noteId);
      this.setState({
        title: this.props.title,
        contents: this.props.contents
      });
    }
  }
  render() { 
    return (
      <React.Fragment>
        <div className="save-note-form">
          <input
            className="form-control title"
            type="text"
            name="title"
            placeholder="Note Title"
            value={this.state.title}
            onChange={this.handleChange}
          />
          <textarea
            className="form-control contents"
            name="contents"
            placeholder="Note Content"
            value={this.state.contents}
            onChange={this.handleChange}
          />
          <Button
            type="primary"
            title={this.props.action}
            clickAction={this.saveForm}
          />
        </div>
      </React.Fragment>
    )
  }
}

const mapStateToProps = state => {
  return {
    title: state.activeNote.title,
    contents: state.activeNote.contents
  }
}

export default connect(mapStateToProps, { getNote, addNote, updateNote })(NoteForm);