import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import Modal from "./Modal";

import { MainContent, NoteWrapper, EditDelete } from "../styles";
import { fetchNote, deleteNote, openModal, closeModal } from "../actions";

class Note extends Component {
  componentDidMount() {
    const id = this.props.match.params.id;
    this.props.fetchNote(id);
  }

  render() {
    if (!this.props.note) {
      return <div>Loading...</div>;
    }

    return (
      <MainContent>
        <EditDelete>
          <span onClick={() => this.props.handleUpdate(this.props.note._id)}>
            Edit
          </span>
          <Modal
            showModal={this.props.openModal}
            note={this.props.note}
            handleDelete={() => {
              this.props.deleteNote(this.props.note._id);
              this.props.closeModal();
              this.props.history.push("/notes");
            }}
            open={this.props.open}
            isOpen={this.props.open}
            hideModal={this.props.closeModal}
          />
        </EditDelete>
        <NoteWrapper>
          <h2>{this.props.note.title}</h2>
          <p> {this.props.note.textBody}</p>
        </NoteWrapper>
      </MainContent>
    );
  }
}

const mapStateToProps = state => ({ note: state.note, open: state.open });

export default withRouter(
  connect(
    mapStateToProps,
    { fetchNote, deleteNote, openModal, closeModal }
  )(Note)
);
