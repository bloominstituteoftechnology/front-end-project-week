import React from 'react';
import { connect } from 'react-redux';
import { deleteNote } from '../actions';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import DeleteModal from './DeleteModal';

const ViewNoteWrapper = styled.div`
  h2 {
    padding: 1.4rem 0 1.4rem;
    font-size:1.4rem;
    font-weight: bold;
    color:#303030;
  }
`;

const EditDelete = styled.div`
  display: flex;
  justify-content: flex-end;
  padding-top:0.7rem;

  a, p {
    margin-right: 0.7rem;
    text-decoration: underline;
    color: black;
    cursor: pointer;
  }
`;

class ViewNote extends React.Component {
  constructor(props) {
    super(props)
    const { note } = this.props.location.state;

    this.state = {
      id: note.id,
      title: note.title,
      content: note.content,
      deleteModal: false
    }
  }

  deleteThisNote = () => {
    // TODO: pop up are you sure modal
    this.props.dispatch(deleteNote(this.state.id))
    this.props.history.push('/')
  }

  closeModal = () => {
    this.setState((state) => ({ deleteModal: !state.deleteModal }))
  }

  render() {
    return (
      <ViewNoteWrapper>
        {this.state.deleteModal ? <DeleteModal deleteThisNote={this.deleteThisNote} closeModal={this.closeModal}/> : null }
        <EditDelete>
          <NavLink to={{ pathname:`/notes/${this.state.id}/edit`, state: { note: this.state } }}>edit</NavLink>
          <p onClick={() => this.closeModal()}>delete</p>
        </EditDelete>
        <h2>{this.state.title}</h2>
        <p>{this.state.content}</p>
      </ViewNoteWrapper>
  )
  }
};

export default connect()(ViewNote);