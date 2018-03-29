import React, { Component } from 'react';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';
import { editNote } from '../actions';
import './NoteEdit.css';

class NoteEdit extends Component {
  constructor(props) {
    super(props);
    this.state = {
      noteTitle: '',
      noteBody: '',
      id: +this.props.match.params.number,
    }
  }

  componentDidMount() {
    const { body, title } = this.props.noteData.notes[this.props.match.params.number];
    const titleBox = document.getElementsByClassName('noteTitle')[0];
    const bodyBox = document.getElementsByClassName('noteBody')[0];
    titleBox.value = title;
    bodyBox.value = body;
    this.setState({
      noteTitle: title,
      noteBody: body,
    })
  }

  handleInput = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value })
  }

  handleUpdate = (event) => {
    event.preventDefault();
    let { noteTitle, noteBody, id} = this.state;
    if (noteTitle && noteBody !== '') {
      this.props.editNote(noteTitle, noteBody, id);
      this.props.history.push('/');
    } else {
      alert('Fields must not be empty!');
    }
  }

  render() {
    return (
      <div className="noteEditContainer">
        <h2 className="noteEditHeader">Edit Note:</h2>
        <div className="formContainer">
          <input onChange={this.handleInput} type="text" name="noteTitle" className="noteTitle" placeholder="Note Title"></input>
          <br />
          <textarea onChange={this.handleInput} name="noteBody" className="noteBody" placeholder="Note Content"></textarea>
          <br />
        </div>
        <button className="noteEditButton" onClick={this.handleUpdate}>Update</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  noteData: state,
});

export default connect(mapStateToProps, { editNote })(withRouter(NoteEdit));
