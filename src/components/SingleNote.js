import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { deleteNote } from '../actions';
import { Container, EditLinks, NoteWrapper } from '../StyledComponents/Note';

class SingleNote extends Component {
  handleDeleteNote = () => {
    const { id } = this.props.location.state;
    this.props.deleteNote(id);
    this.props.history.push('/')
  };

  render() {
    const { id } = this.props.location.state;
    console.log(id)
    return (
      <Container>
        <NoteWrapper>
        <EditLinks>
          <Link className="edit" to={{ pathname: `/update/${id}`, state: this.props.location.state }}>
            edit
          </Link>
          <Link className="edit" to="/" onClick={() => this.handleDeleteNote(id)}>
            delete
          </Link>
        </EditLinks>
        <h3>{this.props.location.state.title}</h3>
        <div className="note-text">{this.props.location.state.textBody}</div>
        </NoteWrapper>
      </Container>
    )}
}

export default connect(
  null,
  { deleteNote }
)(SingleNote);
